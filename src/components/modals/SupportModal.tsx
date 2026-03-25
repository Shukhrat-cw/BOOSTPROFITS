import ModalShell from "./ModalShell";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SupportModal = ({ open, onOpenChange }: Props) => (
  <ModalShell open={open} onOpenChange={onOpenChange} title="Support" description="We're here to help you succeed.">
    <div className="space-y-6 py-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { icon: Mail, label: "Email", value: "mrshukhrat010@gmail.com", sub: "Response within 24 hours" },
          { icon: Phone, label: "Phone", value: "+998 (97) 867 41-12", sub: "Mon-Fri 9am-6pm (UZT)" },
          { icon: MapPin, label: "Office", value: "Tashkent, Uzbekistan", sub: "By appointment" },
          { icon: Clock, label: "Business Hours", value: "Monday – Friday", sub: "9:00 AM – 6:00 PM UZT" },
        ].map((item) => (
          <div key={item.label} className="p-4 rounded-xl border border-border bg-muted/30 space-y-2">
            <div className="flex items-center gap-2">
              <item.icon className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
            <p className="font-medium text-foreground">{item.value}</p>
            <p className="text-xs text-muted-foreground">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-muted/50 rounded-xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-accent" />
          <h4 className="font-semibold">Priority Support</h4>
        </div>
        <p className="text-sm text-muted-foreground">
          Premium plan customers get priority email and phone support with guaranteed 4-hour response times during business hours.
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Common Topics</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {["Account setup & onboarding", "Billing & subscription management", "Integration troubleshooting", "Data export & reporting", "Feature requests"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </ModalShell>
);

export default SupportModal;
