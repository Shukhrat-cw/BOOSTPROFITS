import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { getCurrentUser, logout } from "@/lib/auth";
import Logo from "@/components/Logo";
import ProductModal from "@/components/modals/ProductModal";
import SupportModal from "@/components/modals/SupportModal";
import LegalModal from "@/components/modals/LegalModal";

type ModalName = "product" | "support" | "legal" | null;

// Map of section-based nav items to their FullPageScroll index
const sectionNav: { label: string; sectionIndex: number }[] = [
  { label: "Features", sectionIndex: 2 },
  { label: "Pricing", sectionIndex: 5 },
  { label: "How It Works", sectionIndex: 3 },
  { label: "FAQ", sectionIndex: 7 },
  { label: "Contact Us", sectionIndex: 8 },
];

const modalNav: { label: string; modal: ModalName }[] = [
  { label: "Product", modal: "product" },
  { label: "Support", modal: "support" },
  { label: "Legal", modal: "legal" },
];

const navOrder = ["Product", "Features", "Pricing", "How It Works", "Support", "FAQ", "Contact Us", "Legal"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalName>(null);
  const user = getCurrentUser();

  const scrollToSection = (index: number) => {
    window.dispatchEvent(new CustomEvent("scrollToSection", { detail: index }));
    setMobileOpen(false);
  };

  const openModal = (modal: ModalName) => {
    setActiveModal(modal);
    setMobileOpen(false);
  };

  // Listen for footer openModal events
  useEffect(() => {
    const handler = (e: CustomEvent<string>) => {
      // Check if it's a section scroll request
      const sectionItem = sectionNav.find(s => s.label.toLowerCase().replace(/\s+/g, '') === e.detail.toLowerCase().replace(/\s+/g, ''));
      if (sectionItem) {
        scrollToSection(sectionItem.sectionIndex);
      } else {
        setActiveModal(e.detail as ModalName);
      }
    };
    window.addEventListener("openModal" as any, handler);
    return () => window.removeEventListener("openModal" as any, handler);
  }, []);

  const renderNavItem = (label: string) => {
    const sectionItem = sectionNav.find(s => s.label === label);
    if (sectionItem) {
      return (
        <button
          key={label}
          onClick={() => scrollToSection(sectionItem.sectionIndex)}
          className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
        >
          {label}
        </button>
      );
    }
    const modalItem = modalNav.find(m => m.label === label);
    if (modalItem) {
      return (
        <button
          key={label}
          onClick={() => openModal(modalItem.modal)}
          className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
        >
          {label}
        </button>
      );
    }
    return null;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
        <nav className="container flex items-center justify-between h-16">
          <Link to="/">
            <Logo size={28} />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navOrder.map((label) => (
              <li key={label}>{renderNavItem(label)}</li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="outline" size="sm" onClick={() => { logout(); window.location.reload(); }}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/login">Log In</Link>
                </Button>
                <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-card border-b border-border animate-fade-in">
            <div className="container py-4 space-y-1">
              {navOrder.map((label) => {
                const sectionItem = sectionNav.find(s => s.label === label);
                if (sectionItem) {
                  return (
                    <button
                      key={label}
                      onClick={() => scrollToSection(sectionItem.sectionIndex)}
                      className="block w-full text-left px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                    >
                      {label}
                    </button>
                  );
                }
                const modalItem = modalNav.find(m => m.label === label);
                if (modalItem) {
                  return (
                    <button
                      key={label}
                      onClick={() => openModal(modalItem.modal)}
                      className="block w-full text-left px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                    >
                      {label}
                    </button>
                  );
                }
                return null;
              })}
              <div className="pt-3 border-t border-border mt-3">
                {user ? (
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    <Link to="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link>
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1">
                      <Link to="/login" onClick={() => setMobileOpen(false)}>Log In</Link>
                    </Button>
                    <Button asChild className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                      <Link to="/signup" onClick={() => setMobileOpen(false)}>Start Free</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Modals — only for Product, Support, Legal */}
      <ProductModal open={activeModal === "product"} onOpenChange={(o) => !o && setActiveModal(null)} />
      <SupportModal open={activeModal === "support"} onOpenChange={(o) => !o && setActiveModal(null)} />
      <LegalModal open={activeModal === "legal"} onOpenChange={(o) => !o && setActiveModal(null)} />
    </>
  );
};

export default Navbar;