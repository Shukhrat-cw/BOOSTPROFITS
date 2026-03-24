import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "Most businesses see a measurable reduction in overdue invoices within the first 30 days. Many customers report collecting payments within the first week of setting up automated reminders.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use bank-level encryption (AES-256), all data is transmitted over HTTPS, and passwords are securely hashed. We never share your financial data with third parties.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts. You can cancel your subscription at any time, and your data will be available for export for 30 days after cancellation.",
  },
  {
    q: "What accounting software do you integrate with?",
    a: "We integrate with QuickBooks, Xero, FreshBooks, and Wave. You can also upload invoices manually via CSV or our simple invoice form.",
  },
  {
    q: "What does the 'Results Guarantee' mean?",
    a: "If you don't see a reduction in overdue invoices within 30 days of using our platform, we'll refund your subscription in full. No questions asked.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
