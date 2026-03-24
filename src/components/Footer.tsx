const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <p className="text-xl font-extrabold">
              Boost<span className="text-accent">Profits</span>
            </p>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Helping businesses collect unpaid invoices faster with smart automation.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-sm">Product</p>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#features" className="hover:text-primary-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-primary-foreground transition-colors">How It Works</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-sm">Support</p>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-sm">Legal</p>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Boost Profits LLC. All rights reserved. PCI-compliant checkout via Stripe/PayPal.
          </p>
          <p className="text-xs text-primary-foreground/40">
            HTTPS secured · GDPR compliant
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
