import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { getCurrentUser, logout } from "@/lib/auth";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = getCurrentUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <nav className="container flex items-center justify-between h-16" aria-label="Main navigation">
        <a href="/" className="text-xl font-extrabold tracking-tight text-primary">
          Boost<span className="text-accent">Profits</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
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
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/signup">Start Free Trial</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <ul className="flex flex-col p-4 gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              {user ? (
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  <Link to="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link>
                </Button>
              ) : (
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  <Link to="/signup" onClick={() => setMobileOpen(false)}>Start Free Trial</Link>
                </Button>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
