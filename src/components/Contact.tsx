import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Have questions? Our team is here to help you get started.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "hello@boostprofits.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "Austin, TX, United States" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-muted-foreground">
                  <item.icon className="h-5 w-5 text-accent" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Name *</Label>
              <Input id="contact-name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email *</Label>
              <Input id="contact-email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message">Message *</Label>
              <Textarea id="contact-message" placeholder="How can we help?" rows={4} required />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold py-6 transition-transform hover:scale-[1.02]"
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
