import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PricingToggle from "@/components/PricingToggle";

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
    <section className="section-snap bg-background">
      <div className="container space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free. No credit card required. 30-day money-back guarantee.
          </p>

          <PricingToggle annual={annual} onAnnualChange={setAnnual} className="pt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative bg-card rounded-2xl border-2 p-8 space-y-6 transition-all duration-300 hover:shadow-xl ${
                plan.popular ? "border-accent shadow-lg shadow-accent/10" : "border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-display font-bold text-foreground transition-all duration-300">
                  ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground">/{annual ? "year" : "month"}</span>
              </div>
              <Button
                asChild
                className={`w-full font-bold text-base py-6 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                  plan.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
