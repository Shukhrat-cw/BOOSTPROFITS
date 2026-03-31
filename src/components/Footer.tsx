import Logo from "@/components/Logo";

const footerLinks = {
  Product: [
    { label: "Features", modal: "features" },
    { label: "Pricing", modal: "pricing" },
    { label: "How It Works", modal: "howItWorks" },
  ],
  Support: [
    { label: "FAQ", modal: "faq" },
    { label: "Contact Us", modal: "contact" },
  ],
  Legal: [
    { label: "Privacy Policy", modal: "legal" },
    { label: "Terms of Service", modal: "legal" },
  ],
};

const Footer = () => {
  const openModal = (modal: string) => {
    window.dispatchEvent(new CustomEvent("openModal", { detail: modal }));
  };

  return (
    <footer className="section-snap bg-gradient-dark text-primary-foreground">
      <div className="container flex flex-col justify-center min-h-[100dvh] py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <Logo className="text-primary-foreground" />
            <p className="text-sm text-primary-foreground/40 leading-relaxed">
              Helping businesses collect unpaid invoices faster with intelligent automation. Our platform transforms how you manage cash flow.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <p className="font-display font-semibold text-sm">{category}</p>
              <ul className="space-y-2 text-sm text-primary-foreground/40">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => openModal(link.modal)}
                      className="hover:text-primary-foreground transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Boost Profits LLC. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30">
            Bank-Level Encryption · GDPR Compliant · PCI-DSS Secure
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
