import { Bell, Target, BarChart3, CreditCard, ShieldCheck, Plug } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Automated Reminders",
    description: "Send email/SMS/WhatsApp payment reminders on schedule — no manual follow-ups needed.",
  },
  {
    icon: Target,
    title: "Prioritized Follow-up",
    description: "Automatically flag and follow up on your largest and oldest invoices first.",
  },
  {
    icon: BarChart3,
    title: "Cash Flow Dashboard",
    description: "Real-time charts showing unpaid invoices, collections, and cash forecast at a glance.",
  },
  {
    icon: CreditCard,
    title: "Partial Payments",
    description: "Allow customers to pay in installments and automate the next reminder sequence.",
  },
  {
    icon: ShieldCheck,
    title: "Results Guarantee",
    description: "Reduce unpaid invoices within 30 days or you pay nothing. Zero risk.",
  },
  {
    icon: Plug,
    title: "Easy Integration",
    description: "Connect your accounting software or upload invoices in a single click.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Everything You Need to Get Paid Faster
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools designed for small businesses to eliminate late payments and boost cash flow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card rounded-xl border border-border p-8 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <f.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
