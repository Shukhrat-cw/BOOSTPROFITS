import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border p-4 shadow-lg animate-fade-in">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          We use cookies to improve your experience. By continuing, you agree to our{" "}
          <a href="#" className="text-accent underline hover:no-underline">Privacy Policy</a>.
        </p>
        <Button onClick={accept} className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shrink-0">
          Accept Cookies
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
