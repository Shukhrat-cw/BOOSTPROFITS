import ModalShell from "./ModalShell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const faqs = [
  { q: "How long does it take to see results?", a: "Most businesses see measurable improvement within the first 30 days. Many customers report collecting overdue payments within the first week of enabling automated reminders." },
  { q: "Is my data secure?", a: "Absolutely. We use AES-256 encryption at rest, TLS 1.3 in transit, and all payment data is processed through PCI-DSS Level 1 compliant processors. We never share your data with third parties." },
  { q: "Can I cancel anytime?", a: "Yes. No long-term contracts. Cancel your subscription at any time, and your data will be available for export for 30 days after cancellation." },
  { q: "What accounting software do you integrate with?", a: "QuickBooks, Xero, FreshBooks, and Wave — with more coming soon. You can also upload invoices manually via CSV or our invoice form." },
  { q: "What does the Results Guarantee mean?", a: "If you don't see a reduction in overdue invoices within 30 days of active use (minimum 10 invoices with reminders enabled), we'll refund your most recent subscription payment in full." },
  { q: "Do you support international invoices?", a: "Yes. We support 135+ currencies with automatic exchange rate updates, and our reminder templates can be customized for different languages." },
  { q: "How do partial payments work?", a: "You can set up flexible installment plans for customers. The platform automatically generates payment links for each installment and sends reminders accordingly." },
];

const FAQModal = ({ open, onOpenChange }: Props) => (
  <ModalShell open={open} onOpenChange={onOpenChange} title="Frequently Asked Questions" description="Quick answers to common questions.">
    <div className="py-4">
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline py-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </ModalShell>
);

export default FAQModal;
