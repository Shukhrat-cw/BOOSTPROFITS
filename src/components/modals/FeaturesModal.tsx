import ModalShell from "./ModalShell";
import { Bell, Target, BarChart3, CreditCard, ShieldCheck, Plug, Smartphone, Globe } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const features = [
  { icon: Bell, title: "Automated Multi-Channel Reminders", desc: "Send payment reminders via email, SMS, and WhatsApp on customizable schedules. Set escalation paths from gentle nudges to formal notices." },
  { icon: Target, title: "AI-Prioritized Follow-ups", desc: "Our algorithm ranks overdue invoices by size, age, and payment probability — so you focus on the invoices most likely to be collected." },
  { icon: BarChart3, title: "Cash Flow Forecasting", desc: "Real-time dashboards projecting your cash position 30, 60, and 90 days out based on historical payment patterns." },
  { icon: CreditCard, title: "Partial Payment Plans", desc: "Offer customers flexible installment options with automated billing for each installment." },
  { icon: ShieldCheck, title: "Compliance & Security", desc: "Bank-level encryption, GDPR compliance, full audit trails. Your data is never shared with third parties." },
  { icon: Plug, title: "Seamless Integrations", desc: "Native connections to QuickBooks, Xero, FreshBooks, Wave, and more. Or upload invoices via CSV." },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Monitor collections and send reminders from any device. Full functionality on mobile and tablet." },
  { icon: Globe, title: "Multi-Currency Support", desc: "Send invoices and collect payments in 135+ currencies with automatic exchange rate updates." },
];

const FeaturesModal = ({ open, onOpenChange }: Props) => (
  <ModalShell open={open} onOpenChange={onOpenChange} title="Features" description="Every tool you need to eliminate late payments.">
    <div className="grid gap-3 py-4">
      {features.map((f) => (
        <div key={f.title} className="flex gap-4 p-4 rounded-xl border border-border hover:bg-muted/30 transition-colors">
          <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <f.icon className="h-4 w-4 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">{f.title}</h4>
            <p className="text-sm text-muted-foreground mt-0.5">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </ModalShell>
);

export default FeaturesModal;
