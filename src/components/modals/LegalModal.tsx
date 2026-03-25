import { useState } from "react";
import ModalShell from "./ModalShell";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LegalModal = ({ open, onOpenChange }: Props) => {
  const [tab, setTab] = useState<"privacy" | "terms">("privacy");

  return (
    <ModalShell open={open} onOpenChange={onOpenChange} title="Legal" description="Our commitment to transparency and your rights.">
      <div className="space-y-6 py-4">
        {/* Tab switcher */}
        <div className="flex gap-1 p-1 bg-muted rounded-lg">
          {(["privacy", "terms"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                tab === t ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "privacy" ? "Privacy Policy" : "Terms of Service"}
            </button>
          ))}
        </div>

        {tab === "privacy" ? (
          <div className="prose prose-sm max-w-none text-foreground space-y-4">
            <p className="text-xs text-muted-foreground">Last updated: March 25, 2026</p>

            <h3 className="text-base font-bold">1. Information We Collect</h3>
            <p className="text-sm text-muted-foreground">We collect information you provide directly: name, email address, business name, and billing details when you create an account or subscribe to our services. We also collect usage data including IP addresses, browser type, pages visited, and feature usage through cookies and similar technologies.</p>

            <h3 className="text-base font-bold">2. How We Use Your Data</h3>
            <p className="text-sm text-muted-foreground">Your data is used to: (a) provide and maintain our invoice recovery services; (b) process payments and manage subscriptions; (c) send transactional emails including reminders and receipts; (d) improve our platform through anonymized analytics; (e) comply with legal obligations. We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>

            <h3 className="text-base font-bold">3. Data Security</h3>
            <p className="text-sm text-muted-foreground">We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 encryption in transit, and regular security audits. Payment data is processed through PCI-DSS Level 1 compliant payment processors. We never store full credit card numbers on our servers.</p>

            <h3 className="text-base font-bold">4. Your Rights (GDPR / CCPA)</h3>
            <p className="text-sm text-muted-foreground">You have the right to: access your personal data; correct inaccuracies; request deletion of your data; restrict processing; data portability; and object to processing. To exercise these rights, contact us at mrshukhrat010@gmail.com. We will respond within 30 days.</p>

            <h3 className="text-base font-bold">5. Data Retention</h3>
            <p className="text-sm text-muted-foreground">We retain your data for the duration of your account plus 30 days after deletion to allow for data export. Financial records are retained for 7 years as required by applicable tax and accounting regulations.</p>

            <h3 className="text-base font-bold">6. Cookies</h3>
            <p className="text-sm text-muted-foreground">We use essential cookies for authentication and session management, and optional analytics cookies (which you may decline). You can manage cookie preferences through our cookie banner or your browser settings.</p>

            <h3 className="text-base font-bold">7. Third-Party Services</h3>
            <p className="text-sm text-muted-foreground">We use select third-party processors including cloud hosting providers, payment processors, and email delivery services. All third parties are bound by data processing agreements that comply with applicable privacy laws.</p>

            <h3 className="text-base font-bold">8. Contact</h3>
            <p className="text-sm text-muted-foreground">For privacy inquiries: mrshukhrat010@gmail.com · Boost Profits LLC, Tashkent, Uzbekistan.</p>
          </div>
        ) : (
          <div className="prose prose-sm max-w-none text-foreground space-y-4">
            <p className="text-xs text-muted-foreground">Last updated: March 25, 2026</p>

            <h3 className="text-base font-bold">1. Acceptance of Terms</h3>
            <p className="text-sm text-muted-foreground">By accessing or using Boost Profits LLC services ("Services"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Services. These Terms constitute a legally binding agreement between you and Boost Profits LLC.</p>

            <h3 className="text-base font-bold">2. Description of Service</h3>
            <p className="text-sm text-muted-foreground">Boost Profits LLC provides automated invoice recovery, payment reminder, and cash flow management tools for businesses. The platform facilitates communication between you and your clients but does not guarantee payment collection or specific financial outcomes.</p>

            <h3 className="text-base font-bold">3. Account Responsibilities</h3>
            <p className="text-sm text-muted-foreground">You are responsible for maintaining the confidentiality of your account credentials and all activities under your account. You must provide accurate, current information during registration. You must be at least 18 years old and authorized to conduct business to use our Services.</p>

            <h3 className="text-base font-bold">4. Payment & Billing</h3>
            <p className="text-sm text-muted-foreground">Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as expressly stated in our 30-Day Results Guarantee. Prices are subject to change with 30 days' notice. Failed payments may result in service suspension after a 7-day grace period.</p>

            <h3 className="text-base font-bold">5. Results Guarantee</h3>
            <p className="text-sm text-muted-foreground">If you do not see a measurable reduction in overdue invoices within 30 days of active platform usage (defined as having at least 10 active invoices with automated reminders enabled), you may request a full refund of your most recent subscription payment. This guarantee applies once per account.</p>

            <h3 className="text-base font-bold">6. Limitation of Liability</h3>
            <p className="text-sm text-muted-foreground">To the maximum extent permitted by law, Boost Profits LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. Our total aggregate liability shall not exceed the amount you paid us in the 12 months preceding the claim.</p>

            <h3 className="text-base font-bold">7. Intellectual Property</h3>
            <p className="text-sm text-muted-foreground">All content, features, and functionality of the Services are owned by Boost Profits LLC and protected by intellectual property laws. You retain ownership of your business data uploaded to the platform.</p>

            <h3 className="text-base font-bold">8. Termination</h3>
            <p className="text-sm text-muted-foreground">Either party may terminate at any time. Upon termination, your data will be available for export for 30 days. We reserve the right to suspend or terminate accounts that violate these Terms without prior notice.</p>

            <h3 className="text-base font-bold">9. Governing Law</h3>
            <p className="text-sm text-muted-foreground">These Terms shall be governed by the laws of the Republic of Uzbekistan. Any disputes shall be resolved through binding arbitration in Tashkent, Uzbekistan.</p>

            <h3 className="text-base font-bold">10. Contact</h3>
            <p className="text-sm text-muted-foreground">Questions about these Terms: mrshukhrat010@gmail.com · Boost Profits LLC, Tashkent, Uzbekistan.</p>
          </div>
        )}
      </div>
    </ModalShell>
  );
};

export default LegalModal;
