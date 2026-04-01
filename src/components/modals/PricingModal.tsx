import { useState } from "react";
import ModalShell from "./ModalShell";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PricingToggle from "@/components/PricingToggle";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const plans = [
  {
    name: "Starter",
    monthly: 49,
    yearly: 490,
    desc: "For small businesses getting started",
    features: ["Up to 100 invoices/mo", "Email & SMS reminders", "Basic dashboard", "Standard reports", "Email support"],
  },
  {
    name: "Premium",
    monthly: 99,
    yearly: 990,
    desc: "For growing businesses",
    popular: true,
    features: ["Unlimited invoices", "Email, SMS & WhatsApp", "Advanced analytics", "Custom sequences", "Partial payments", "API integrations", "Priority support"],
  },
];

const PricingModal = ({ open, onOpenChange }: Props) => {
  const [annual, setAnnual] = useState(false);

  return (
    <ModalShell open={open} onOpenChange={onOpenChange} title="Pricing" description="Simple, transparent pricing. No hidden fees.">
      <div className="space-y-6 py-4">
        <PricingToggle annual={annual} onAnnualChange={setAnnual} />

        <div className="grid sm:grid-cols-2 gap-4">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-xl border-2 p-5 space-y-4 ${p.popular ? "border-accent" : "border-border"}`}>
              {p.popular && <span className="text-xs font-bold text-accent">Most Popular</span>}
              <h3 className="font-display font-bold text-lg">{p.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">${annual ? p.yearly : p.monthly}</span>
                <span className="text-sm text-muted-foreground">/{annual ? "yr" : "mo"}</span>
              </div>
              <Button asChild className={`w-full ${p.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`} onClick={() => onOpenChange(false)}>
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-accent shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ModalShell>
  );
};

export default PricingModal;
