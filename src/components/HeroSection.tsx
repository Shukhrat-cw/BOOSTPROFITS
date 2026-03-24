import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(0_100%_70%_/_0.12),_transparent_60%)]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground">
              Stop Losing Money to{" "}
              <span className="text-accent">Late Payments</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg">
              Boost Profits LLC helps businesses collect unpaid invoices faster — guaranteed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-8 transition-transform hover:scale-105">
                <Link to="/signup">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8">
                <a href="#how-it-works">
                  <Play className="mr-2 h-4 w-4" /> Learn How It Works
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-6 text-xs text-primary-foreground/50">
              <span>🔒 HTTPS Secured</span>
              <span>✓ GDPR Compliant</span>
              <span>💳 Stripe / PayPal</span>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="relative">
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 p-6 shadow-2xl">
              <div className="bg-primary/40 rounded-xl p-4 space-y-4">
                {/* Mock chart bars */}
                <div className="flex items-end gap-2 h-32">
                  {[60, 45, 80, 35, 90, 55, 75, 95, 50, 85, 70, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm transition-all duration-500"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i >= 8 ? "hsl(0 100% 70%)" : "hsl(0 0% 100% / 0.3)",
                      }}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Collected", value: "$48,250" },
                    { label: "Pending", value: "$12,400" },
                    { label: "Overdue", value: "$3,100" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                      <p className="text-xs text-primary-foreground/60">{stat.label}</p>
                      <p className="text-lg font-bold text-primary-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
