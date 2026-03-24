import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 49,
    yearlyPrice: 490,
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 100 invoices/month",
      "Email & SMS reminders",
      "Basic cash flow dashboard",
      "Standard reports",
      "Email support",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: "For growing businesses that need more power",
    popular: true,
    features: [
      "Unlimited invoices",
      "Email, SMS & WhatsApp reminders",
      "Advanced analytics & forecasting",
      "Custom reminder sequences",
      "Partial payment plans",
      "API & accounting integrations",
      "Priority support",
    ],
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free. No credit card required. 30-day money-back guarantee.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className={`text-sm font-medium ${!annual ? "text-primary" : "text-muted-foreground"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative h-7 w-12 rounded-full transition-colors ${annual ? "bg-accent" : "bg-border"}`}
              aria-label="Toggle annual pricing"
            >
              <span className={`absolute top-0.5 h-6 w-6 rounded-full bg-card shadow transition-transform ${annual ? "translate-x-5" : "translate-x-0.5"}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-primary" : "text-muted-foreground"}`}>
              Annual <span className="text-accent text-xs font-bold">Save 17%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl border-2 p-8 space-y-6 transition-all duration-300 hover:shadow-xl ${
                plan.popular ? "border-accent shadow-lg" : "border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="text-2xl font-bold text-primary">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-primary">
                  ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground">/{annual ? "year" : "month"}</span>
              </div>
              <Button
                className={`w-full font-bold text-base py-6 transition-transform hover:scale-[1.02] ${
                  plan.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                aria-label={`Start free trial for ${plan.name} plan`}
              >
                Start Free Trial
              </Button>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
