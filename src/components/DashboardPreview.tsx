import { motion } from "framer-motion";

const DashboardPreview = () => {
  return (
    <section className="section-snap bg-background">
      <div className="container space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Dashboard</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Your Cash Flow, at a Glance
          </h2>
          <p className="text-lg text-muted-foreground">
            Beautiful analytics and invoice tracking — all in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-foreground rounded-t-2xl p-3">
            <div className="flex items-center gap-2 px-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-accent/60" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
              </div>
              <div className="flex-1 mx-8">
                <div className="h-6 bg-muted-foreground/10 rounded-md max-w-xs mx-auto" />
              </div>
            </div>
          </div>
          <div className="bg-gradient-dark rounded-b-2xl p-6 md:p-10 border-x-2 border-b-2 border-foreground/10">
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: "Total Revenue", value: "$3.2K", change: "+12%", positive: true },
                  { label: "Collected", value: "$2.4K", change: "+18%", positive: true },
                  { label: "Pending", value: "$520", change: "-8%", positive: false },
                  { label: "Overdue", value: "$280", change: "-24%", positive: false },
                ].map((s) => (
                  <div key={s.label} className="bg-primary-foreground/5 rounded-xl p-3 text-center">
                    <p className="text-[10px] md:text-xs text-primary-foreground/40">{s.label}</p>
                    <p className="text-sm md:text-xl font-bold text-primary-foreground">{s.value}</p>
                    <p className={`text-[10px] md:text-xs font-semibold ${s.positive ? 'text-green-400' : 'text-accent'}`}>
                      {s.change}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-primary-foreground/5 rounded-xl p-4">
                <svg viewBox="0 0 400 100" className="w-full h-20 md:h-32">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="hsl(4 90% 58%)" />
                      <stop offset="100%" stopColor="hsl(20 95% 55%)" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,80 40,70 80,60 120,65 160,45 200,50 240,30 280,35 320,20 360,25 400,10"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="0,90 40,85 80,80 120,75 160,70 200,65 240,60 280,55 320,50 360,48 400,45"
                    fill="none"
                    stroke="hsl(0 0% 100% / 0.15)"
                    strokeWidth="1.5"
                    strokeDasharray="4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
