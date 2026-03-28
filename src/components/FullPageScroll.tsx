import { useState, useEffect, useRef, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FullPageScrollProps {
  children: ReactNode[];
}

const FullPageScroll = ({ children }: FullPageScrollProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = down, -1 = up
  const isTransitioning = useRef(false);
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSections = children.length;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning.current) return;
      const clamped = Math.max(0, Math.min(totalSections - 1, index));
      if (clamped === currentIndex) return;

      isTransitioning.current = true;
      setDirection(clamped > currentIndex ? 1 : -1);
      setCurrentIndex(clamped);

      setTimeout(() => {
        isTransitioning.current = false;
      }, 700);
    },
    [currentIndex, totalSections]
  );

  // Expose goTo for nav anchor links
  useEffect(() => {
    const handler = (e: CustomEvent<number>) => goTo(e.detail);
    window.addEventListener("scrollToSection" as any, handler);
    return () => window.removeEventListener("scrollToSection" as any, handler);
  }, [goTo]);

  // Wheel
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isTransitioning.current) return;
      if (Math.abs(e.deltaY) < 30) return;
      if (e.deltaY > 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
    };
    const el = containerRef.current;
    el?.addEventListener("wheel", onWheel, { passive: false });
    return () => el?.removeEventListener("wheel", onWheel);
  }, [currentIndex, goTo]);

  // Touch
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (isTransitioning.current) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      if (diff > 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
    };
    const el = containerRef.current;
    el?.addEventListener("touchstart", onTouchStart, { passive: true });
    el?.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el?.removeEventListener("touchstart", onTouchStart);
      el?.removeEventListener("touchend", onTouchEnd);
    };
  }, [currentIndex, goTo]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goTo(currentIndex + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goTo(currentIndex - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(totalSections - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex, goTo, totalSections]);

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? "-50%" : "50%",
      opacity: 0,
    }),
  };

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Dot navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to section ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "bg-accent scale-125 shadow-lg shadow-accent/40"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "tween", duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.4 },
          }}
          className="absolute inset-0 h-screen w-full"
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FullPageScroll;
