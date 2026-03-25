import ModalShell from "./ModalShell";
import { ArrowRight, Zap, Shield, BarChart3, Bell } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductModal = ({ open, onOpenChange }: Props) => (
  <ModalShell open={open} onOpenChange={onOpenChange} title="Our Product" description="A complete revenue recovery platform built for modern businesses.">
    <div className="space-y-6 py-4">
      <p className="text-muted-foreground leading-relaxed">
        Boost Profits LLC is an intelligent accounts receivable automation platform. We help businesses of all sizes collect unpaid invoices faster, reduce DSO (Days Sales Outstanding), and improve cash flow predictability — all without the awkward conversations.
      </p>

      <div className="grid gap-4">
        {[
          { icon: Bell, title: "Smart Reminders", desc: "Multi-channel payment reminders via email, SMS, and WhatsApp — customizable to your brand voice." },
          { icon: BarChart3, title: "Revenue Intelligence", desc: "Real-time dashboards showing collection rates, cash flow forecasts, and aging reports." },
          { icon: Shield, title: "Compliance Built-In", desc: "GDPR-compliant data handling, PCI-DSS secure payment links, and full audit trails." },
          { icon: Zap, title: "Instant Setup", desc: "Connect your accounting software or upload invoices. Be live in under 5 minutes." },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-border bg-muted/30">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <item.icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-hero rounded-xl p-6 text-primary-foreground">
        <h4 className="font-display font-bold text-lg mb-2">Results Guarantee</h4>
        <p className="text-sm opacity-80">
          Reduce overdue invoices within 30 days or your subscription is free. We're that confident in our platform.
        </p>
        <div className="flex items-center gap-1 mt-3 text-accent text-sm font-semibold">
          Learn more <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  </ModalShell>
);

export default ProductModal;
