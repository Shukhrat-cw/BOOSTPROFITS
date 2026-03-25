import ModalShell from "./ModalShell";
import { Upload, Zap, DollarSign, Settings } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const steps = [
  { icon: Upload, num: "01", title: "Connect Your Invoices", desc: "Link your accounting software (QuickBooks, Xero, FreshBooks) or upload invoices via CSV. Setup takes under 5 minutes." },
  { icon: Settings, num: "02", title: "Configure Your Workflow", desc: "Set reminder schedules, customize email/SMS templates, and define escalation paths. Our templates are proven to maximize response rates." },
  { icon: Zap, num: "03", title: "Automate & Monitor", desc: "Our system sends smart, personalized reminders and updates your dashboard in real-time. You can intervene at any point." },
  { icon: DollarSign, num: "04", title: "Get Paid Faster", desc: "Watch invoices get paid and your cash flow improve. Most businesses see results within the first week." },
];

const HowItWorksModal = ({ open, onOpenChange }: Props) => (
  <ModalShell open={open} onOpenChange={onOpenChange} title="How It Works" description="Four simple steps to transform your cash flow.">
    <div className="space-y-4 py-4">
      {steps.map((s, i) => (
        <div key={s.num} className="flex gap-4 relative">
          {i < steps.length - 1 && (
            <div className="absolute left-5 top-12 bottom-0 w-px bg-border" />
          )}
          <div className="h-10 w-10 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center shrink-0 relative z-10">
            <span className="text-xs font-bold text-accent">{s.num}</span>
          </div>
          <div className="pb-6">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </ModalShell>
);

export default HowItWorksModal;
