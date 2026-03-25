import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section className="section-snap bg-card">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground">Have questions? Our team is here to help you get started.</p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "mrshukhrat010@gmail.com" },
                { icon: Phone, text: "+998 (97) 867 41-12" },
                { icon: MapPin, text: "Tashkent, Uzbekistan" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5 bg-background rounded-2xl border border-border p-6"
          >
            <div className="space-y-2">
              <Label htmlFor="contact-name">Name *</Label>
              <Input id="contact-name" placeholder="Your name" required className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email *</Label>
              <Input id="contact-email" type="email" placeholder="you@company.com" required className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message">Message *</Label>
              <Textarea id="contact-message" placeholder="How can we help?" rows={4} required className="rounded-xl" />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-6 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25"
            >
              {sending ? "Sending..." : <>Send Message <ArrowRight className="ml-2 h-4 w-4" /></>}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
