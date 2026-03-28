import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="section-snap relative overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster=""
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-2391/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,60%,6%)/0.92] via-[hsl(225,50%,10%)/0.88] to-[hsl(220,60%,8%)/0.9]" />

      {/* Animated glow orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-accent/15 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-accent/8 blur-[100px]"
      />

      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground/70 text-sm backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Trusted by 500+ businesses worldwide
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.1] text-primary-foreground tracking-tight">
              Stop Losing Money to{" "}
              <span className="text-gradient">Late Payments</span>
            </h1>

            <p className="text-lg text-primary-foreground/60 max-w-lg leading-relaxed">
              Boost Profits LLC automates invoice collection, sends smart reminders, and helps you get paid faster — guaranteed results within 30 days. Our SaaS platform streamlines your entire accounts receivable workflow so you can focus on growing your business.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-8 h-12 rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/25">
                <Link to="/signup">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5 font-medium text-base px-8 h-12 rounded-xl">
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 text-xs text-primary-foreground/40">
              <span>🔒 Bank-Level Encryption</span>
              <span>✓ GDPR Compliant</span>
              <span>💳 Secure Payments</span>
            </div>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            <div className="glass rounded-2xl p-6 shadow-2xl">
              <div className="bg-primary-foreground/5 rounded-xl p-5 space-y-5">
                {/* Mini stat row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Collected", value: "$118.5K", change: "+18%" },
                    { label: "Pending", value: "$18.2K", change: "-8%" },
                    { label: "Overdue", value: "$6.1K", change: "-24%" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-primary-foreground/5 rounded-lg p-3 text-center">
                      <p className="text-[10px] text-primary-foreground/40">{stat.label}</p>
                      <p className="text-lg font-bold text-primary-foreground">{stat.value}</p>
                      <p className={`text-[10px] font-semibold ${stat.change.startsWith('+') ? 'text-green-400' : 'text-accent'}`}>
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Mock chart */}
                <div className="flex items-end gap-1.5 h-28">
                  {[60, 45, 80, 35, 90, 55, 75, 95, 50, 85, 70, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.6 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                      className="flex-1 rounded-t"
                      style={{
                        backgroundColor: i >= 8 ? "hsl(4 90% 58%)" : "hsl(0 0% 100% / 0.1)",
                      }}
                    />
                  ))}
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
