import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "How long does it take to see results?", a: "Most businesses see a measurable reduction in overdue invoices within the first 30 days. Many customers report collecting payments within the first week of setting up automated reminders." },
  { q: "Is my data secure?", a: "Absolutely. We use bank-level encryption (AES-256), all data is transmitted over HTTPS/TLS 1.3, and passwords are securely hashed. We never share your financial data with third parties." },
  { q: "Can I cancel anytime?", a: "Yes. No long-term contracts. Cancel your subscription at any time, and your data will be available for export for 30 days after cancellation." },
  { q: "What accounting software do you integrate with?", a: "QuickBooks, Xero, FreshBooks, and Wave. You can also upload invoices manually via CSV or our simple invoice form." },
  { q: "What does the 'Results Guarantee' mean?", a: "If you don't see a reduction in overdue invoices within 30 days of using our platform, we'll refund your subscription in full. No questions asked." },
];

const FAQ = () => {
  return (
    <section className="section-snap bg-background">
      <div className="container max-w-3xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">Quick answers to common questions.</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
