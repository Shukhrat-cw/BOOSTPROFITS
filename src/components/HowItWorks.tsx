import { Upload, Zap, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Connect Your Invoices",
    description: "Link your accounting software or upload invoices directly. Setup takes under 5 minutes.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Automate & Track",
    description: "Our system sends smart reminders and updates your dashboard in real-time.",
  },
  {
    icon: DollarSign,
    number: "03",
    title: "Get Paid Faster",
    description: "Watch invoices get paid and your cash flow improve — guaranteed.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            How It Works
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Three simple steps to transform your cash flow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-primary-foreground/20" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center space-y-6">
              <div className="relative inline-flex">
                <div className="h-20 w-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto border-2 border-accent/40">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-primary-foreground/70 max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
