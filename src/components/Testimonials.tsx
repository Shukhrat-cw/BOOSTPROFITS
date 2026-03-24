import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Boost Profits collected $34,000 of payments I'd almost given up on. Huge relief for my business.",
    author: "Maria G.",
    role: "Small Retail Owner",
  },
  {
    text: "The dashboard alone is worth the price. I can finally see exactly where my cash flow stands.",
    author: "James T.",
    role: "Freelance Consultant",
  },
  {
    text: "We cut our accounts receivable time by 60%. Our CFO couldn't believe the first month's report.",
    author: "Sarah L.",
    role: "E-Commerce Founder",
  },
  {
    text: "Automated reminders saved me from awkward payment conversations. Professional and effective.",
    author: "David K.",
    role: "IT Services Owner",
  },
  {
    text: "Setup took 10 minutes. By the end of the week, two overdue invoices were paid. Incredible.",
    author: "Rachel P.",
    role: "Healthcare Practice Manager",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Loved by Business Owners
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Real results from real businesses
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 space-y-4 transition-all duration-300 hover:bg-primary-foreground/10 ${
                i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-primary-foreground/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
