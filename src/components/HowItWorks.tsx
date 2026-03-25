import { Upload, Zap, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Upload, number: "01", title: "Connect Your Invoices", description: "Link your accounting software or upload invoices directly. Setup takes under 5 minutes." },
  { icon: Zap, number: "02", title: "Automate & Track", description: "Smart reminders go out on schedule while your dashboard updates in real-time." },
  { icon: DollarSign, number: "03", title: "Get Paid Faster", description: "Watch invoices get collected and your cash flow improve — guaranteed." },
];

const HowItWorks = () => {
  return (
    <section className="section-snap bg-gradient-dark text-primary-foreground">
      <div className="container space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Process</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">How It Works</h2>
          <p className="text-lg text-primary-foreground/60">Three simple steps to transform your cash flow</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-primary-foreground/10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative text-center space-y-6"
            >
              <div className="relative inline-flex">
                <div className="h-20 w-20 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center mx-auto">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-lg bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold">{step.title}</h3>
              <p className="text-primary-foreground/50 max-w-xs mx-auto leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
