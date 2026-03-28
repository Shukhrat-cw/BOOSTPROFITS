import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DashboardPreview from "@/components/DashboardPreview";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FullPageScroll from "@/components/FullPageScroll";

const sectionIds = [
  "hero", "trusted", "features", "how-it-works",
  "dashboard", "pricing", "testimonials", "faq", "contact", "footer"
];

const Index = () => {
  // Handle anchor links → dispatch custom event
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']");
      if (anchor) {
        e.preventDefault();
        const id = anchor.getAttribute("href")?.slice(1);
        if (id) {
          const idx = sectionIds.indexOf(id);
          if (idx >= 0) {
            window.dispatchEvent(new CustomEvent("scrollToSection", { detail: idx }));
          }
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <FullPageScroll>
        {[
          <HeroSection key="hero" />,
          <TrustedBy key="trusted" />,
          <Features key="features" />,
          <HowItWorks key="how" />,
          <DashboardPreview key="dash" />,
          <Pricing key="pricing" />,
          <Testimonials key="testimonials" />,
          <FAQ key="faq" />,
          <Contact key="contact" />,
          <Footer key="footer" />,
        ]}
      </FullPageScroll>
      <CookieBanner />
    </div>
  );
};

export default Index;
