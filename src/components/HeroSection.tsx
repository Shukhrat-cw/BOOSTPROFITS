import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      const attempt = video.play();
      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(() => undefined);
      }
    };

    playVideo();

    const handleLoadedData = () => playVideo();
    const handlePageShow = () => playVideo();
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    video.addEventListener("loadeddata", handleLoadedData);
    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-[hsl(220,60%,6%)]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-2391/1080p.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(135deg, hsla(220,60%,6%,0.92) 0%, hsla(225,50%,10%,0.88) 50%, hsla(220,60%,8%,0.90) 100%)",
        }}
      />

      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-[120px]"
        style={{ zIndex: 2, backgroundColor: "hsla(4,90%,58%,0.15)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full blur-[100px]"
        style={{ zIndex: 2, backgroundColor: "hsla(4,90%,58%,0.08)" }}
      />

      <div
        className="relative mx-auto flex min-h-[100dvh] max-w-7xl items-center px-6 py-24"
        style={{ zIndex: 10 }}
      >
        <div className="grid w-full lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[hsl(4,90%,58%)] animate-pulse" />
              Trusted by 500+ businesses worldwide
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.1] text-white tracking-tight">
              Stop Losing Money to{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(4,90%,58%), hsl(20,95%,55%))",
                }}
              >
                Late Payments
              </span>
            </h1>

            <p className="text-lg text-white/60 max-w-lg leading-relaxed">
              Boost Profits LLC automates invoice collection, sends smart
              reminders, and helps you get paid faster — guaranteed results
              within 30 days.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(4,90%,58%)] text-white hover:bg-[hsl(4,90%,50%)] font-bold text-base px-8 h-12 rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-[hsl(4,90%,58%)]/25"
              >
                <Link to="/signup">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white/70 hover:text-white hover:bg-white/5 font-medium text-base px-8 h-12 rounded-xl border border-white/10"
              >
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 text-xs text-white/40">
              <span>🔒 Bank-Level Encryption</span>
              <span>✓ GDPR Compliant</span>
              <span>💳 Secure Payments</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative hidden lg:block"
          >
            <div
              className="rounded-2xl p-6 shadow-2xl"
              style={{
                background: "hsla(0,0%,100%,0.06)",
                backdropFilter: "blur(20px)",
                border: "1px solid hsla(0,0%,100%,0.08)",
              }}
            >
              <div className="rounded-xl p-5 space-y-5" style={{ background: "hsla(0,0%,100%,0.05)" }}>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Collected", value: "$2.4K", change: "+18%" },
                    { label: "Pending", value: "$820", change: "-8%" },
                    { label: "Overdue", value: "$310", change: "-24%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg p-3 text-center"
                      style={{ background: "hsla(0,0%,100%,0.05)" }}
                    >
                      <p className="text-[10px] text-white/40">{stat.label}</p>
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p
                        className={`text-[10px] font-semibold ${
                          stat.change.startsWith("+")
                            ? "text-green-400"
                            : "text-[hsl(4,90%,58%)]"
                        }`}
                      >
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-end gap-1.5 h-28">
                  {[60, 45, 80, 35, 90, 55, 75, 95, 50, 85, 70, 88].map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{
                          delay: 0.6 + i * 0.05,
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        className="flex-1 rounded-t"
                        style={{
                          backgroundColor:
                            i >= 8
                              ? "hsl(4,90%,58%)"
                              : "hsla(0,0%,100%,0.1)",
                        }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
