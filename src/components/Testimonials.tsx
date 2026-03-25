import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  { text: "Boost Profits collected $14,320 of payments I'd almost given up on. Huge relief for my business.", author: "Maria G.", role: "Small Retail Owner" },
  { text: "The dashboard alone is worth the price. I can finally see exactly where my cash flow stands.", author: "James T.", role: "Freelance Consultant" },
  { text: "We reduced our accounts receivable time by about 45%. Our CFO was impressed with the first month's results.", author: "Sarah L.", role: "E-Commerce Founder" },
  { text: "Automated reminders saved me from awkward payment conversations. Professional and effective.", author: "David K.", role: "IT Services Owner" },
  { text: "Setup took 10 minutes. By the end of the week, two overdue invoices were paid. Really impressive.", author: "Rachel P.", role: "Healthcare Practice Manager" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="section-snap bg-gradient-dark text-primary-foreground">
      <div className="container space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Loved by Business Owners</h2>
          <p className="text-lg text-primary-foreground/50">Real results from real businesses</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.slice(current, current + 3).map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-primary-foreground/5 border border-primary-foreground/8 rounded-2xl p-6 space-y-4 hover:bg-primary-foreground/8 transition-colors"
              >
                <Quote className="h-8 w-8 text-accent/30" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">"{t.text}"</p>
                <div className="pt-2 border-t border-primary-foreground/8">
                  <p className="font-semibold text-sm">{t.author}</p>
                  <p className="text-xs text-primary-foreground/40">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="h-10 w-10 rounded-xl border border-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/5 transition-all disabled:opacity-20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrent(Math.min(testimonials.length - 3, current + 1))}
              disabled={current >= testimonials.length - 3}
              className="h-10 w-10 rounded-xl border border-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/5 transition-all disabled:opacity-20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
