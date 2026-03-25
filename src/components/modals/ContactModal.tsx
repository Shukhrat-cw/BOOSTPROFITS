import { useState } from "react";
import ModalShell from "./ModalShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: Props) => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll respond within 24 hours." });
      (e.target as HTMLFormElement).reset();
      onOpenChange(false);
    }, 1000);
  };

  return (
    <ModalShell open={open} onOpenChange={onOpenChange} title="Contact Us" description="Have a question? We'd love to hear from you.">
      <form onSubmit={handleSubmit} className="space-y-4 py-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="modal-name">Name *</Label>
            <Input id="modal-name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="modal-email">Email *</Label>
            <Input id="modal-email" type="email" placeholder="you@company.com" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="modal-subject">Subject</Label>
          <Input id="modal-subject" placeholder="What's this about?" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="modal-message">Message *</Label>
          <Textarea id="modal-message" placeholder="Tell us how we can help..." rows={5} required />
        </div>
        <Button
          type="submit"
          disabled={sending}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
        >
          {sending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </ModalShell>
  );
};

export default ContactModal;
