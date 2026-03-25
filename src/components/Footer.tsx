import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <Logo className="text-primary-foreground" />
            <p className="text-sm text-primary-foreground/40 leading-relaxed">
              Helping businesses collect unpaid invoices faster with intelligent automation.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-display font-semibold text-sm">Product</p>
            <ul className="space-y-2 text-sm text-primary-foreground/40">
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Features</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Pricing</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">How It Works</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-display font-semibold text-sm">Support</p>
            <ul className="space-y-2 text-sm text-primary-foreground/40">
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-display font-semibold text-sm">Legal</p>
            <ul className="space-y-2 text-sm text-primary-foreground/40">
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
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
