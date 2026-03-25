import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-card rounded-2xl border border-border p-5 shadow-2xl"
        >
          <button onClick={accept} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
          <p className="text-sm text-muted-foreground pr-6 leading-relaxed">
            We use cookies to improve your experience. By continuing, you agree to our privacy policy.
          </p>
          <div className="flex gap-2 mt-3">
            <Button onClick={accept} size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-lg">
              Accept
            </Button>
            <Button onClick={accept} variant="ghost" size="sm" className="text-muted-foreground rounded-lg">
              Decline
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
