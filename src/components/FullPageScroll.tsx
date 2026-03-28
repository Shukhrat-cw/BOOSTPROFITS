import { useState, useEffect, useRef, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FullPageScrollProps {
  children: ReactNode[];
}

const FullPageScroll = ({ children }: FullPageScrollProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isTransitioning = useRef(false);
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const totalSections = children.length;
  const accumulatedDelta = useRef(0);
  const deltaTimeout = useRef<ReturnType<typeof setTimeout>>();

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
        accumulatedDelta.current = 0;
      }, 800);
    },
    [currentIndex, totalSections]
  );

  // Custom event for nav anchor links
  useEffect(() => {
    const handler = (e: CustomEvent<number>) => goTo(e.detail);
    window.addEventListener("scrollToSection" as any, handler);
    return () => window.removeEventListener("scrollToSection" as any, handler);
  }, [goTo]);

  // Check if section content is scrollable and at boundary
  const canScrollSection = useCallback((dir: "up" | "down") => {
    const el = sectionRef.current;
    if (!el) return false;
    const scrollable = el.scrollHeight > el.clientHeight + 2;
    if (!scrollable) return false;
    if (dir === "down") return el.scrollTop + el.clientHeight < el.scrollHeight - 2;
    if (dir === "up") return el.scrollTop > 2;
    return false;
  }, []);

  // Wheel — accumulate delta for smoother trackpad support
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isTransitioning.current) { e.preventDefault(); return; }

      const dir = e.deltaY > 0 ? "down" : "up";
      if (canScrollSection(dir)) return; // let internal scroll happen

      e.preventDefault();

      accumulatedDelta.current += e.deltaY;
      clearTimeout(deltaTimeout.current);
      deltaTimeout.current = setTimeout(() => { accumulatedDelta.current = 0; }, 200);

      if (Math.abs(accumulatedDelta.current) < 80) return;

      if (accumulatedDelta.current > 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
      accumulatedDelta.current = 0;
    };
    const el = containerRef.current;
    el?.addEventListener("wheel", onWheel, { passive: false });
    return () => el?.removeEventListener("wheel", onWheel);
  }, [currentIndex, goTo, canScrollSection]);

  // Touch
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (isTransitioning.current) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      const dir = diff > 0 ? "down" : "up";
      if (canScrollSection(dir)) return;
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
  }, [currentIndex, goTo, canScrollSection]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (canScrollSection("down")) return;
        e.preventDefault();
        goTo(currentIndex + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (canScrollSection("up")) return;
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
  }, [currentIndex, goTo, totalSections, canScrollSection]);

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      y: "0%",
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <div ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden">
      {/* Dot navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to section ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "bg-accent scale-125 shadow-lg shadow-accent/40"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          ref={sectionRef}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "tween", duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
            opacity: { duration: 0.5, ease: "easeInOut" },
            scale: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
          }}
          className="absolute inset-0 h-[100dvh] w-full overflow-y-auto"
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FullPageScroll;
