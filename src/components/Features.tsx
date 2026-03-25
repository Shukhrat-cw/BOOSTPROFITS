import { Bell, Target, BarChart3, CreditCard, ShieldCheck, Plug } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Bell, title: "Automated Reminders", description: "Email, SMS & WhatsApp payment reminders on schedule — zero manual follow-ups." },
  { icon: Target, title: "Smart Prioritization", description: "AI flags your largest and oldest invoices first for maximum recovery." },
  { icon: BarChart3, title: "Cash Flow Dashboard", description: "Real-time charts: unpaid invoices, collections, and 90-day forecasts." },
  { icon: CreditCard, title: "Partial Payments", description: "Let customers pay in installments with automated follow-up sequences." },
  { icon: ShieldCheck, title: "Results Guarantee", description: "Reduce overdue invoices in 30 days or pay nothing. Zero risk." },
  { icon: Plug, title: "Easy Integration", description: "Connect QuickBooks, Xero, FreshBooks, or upload invoices in one click." },
];

const Features = () => {
  return (
    <section className="section-snap bg-background">
      <div className="container space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Features</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Everything You Need to Get Paid Faster
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools designed for small businesses to eliminate late payments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-card rounded-2xl border border-border p-7 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/20"
            >
              <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <f.icon className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
