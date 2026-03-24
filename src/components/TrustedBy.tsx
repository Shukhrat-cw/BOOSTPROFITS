import { Store, Briefcase, ShoppingCart, Heart, Building2 } from "lucide-react";

const industries = [
  { name: "Retail", icon: Store },
  { name: "Professional Services", icon: Briefcase },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: Heart },
  { name: "Consulting", icon: Building2 },
];

const quotes = [
  {
    text: "Within 30 days of using Boost Profits, our overdue invoices dropped by 40%. Game changer.",
    author: "Retail Shop Owner",
  },
  {
    text: "We recovered $22,000 in unpaid invoices the first month. I wish we'd started sooner.",
    author: "E-Commerce Founder",
  },
  {
    text: "The automated reminders saved my team 15 hours a week. Now we focus on growth.",
    author: "Agency Director",
  },
];

const TrustedBy = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container space-y-12">
        <div className="text-center space-y-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by businesses across industries
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {industries.map((ind) => (
            <div key={ind.name} className="flex items-center gap-2 text-muted-foreground/60">
              <ind.icon className="h-6 w-6" />
              <span className="text-sm font-medium">{ind.name}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          {quotes.map((q, i) => (
            <blockquote key={i} className="text-center space-y-3">
              <p className="italic text-muted-foreground leading-relaxed">"{q.text}"</p>
              <cite className="block text-sm font-semibold text-primary not-italic">— {q.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
