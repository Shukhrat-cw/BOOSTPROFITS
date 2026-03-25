import { motion } from "framer-motion";
import { Store, Briefcase, ShoppingCart, Heart, Building2 } from "lucide-react";

const industries = [
  { name: "Retail", icon: Store },
  { name: "Professional Services", icon: Briefcase },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: Heart },
  { name: "Consulting", icon: Building2 },
];

const TrustedBy = () => {
  return (
    <section className="section-snap bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Trusted across industries
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-2.5 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                <ind.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{ind.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
            {[
              { stat: "$2.4M+", label: "Revenue recovered for clients" },
              { stat: "500+", label: "Businesses trust us" },
              { stat: "34%", label: "Avg. payment time reduction" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="text-center space-y-2"
              >
                <p className="text-4xl font-display font-bold text-foreground">{item.stat}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
