const DashboardPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Your Cash Flow, at a Glance
          </h2>
          <p className="text-lg text-muted-foreground">
            Insightful cash flow analytics and invoice tracker — all in one beautiful dashboard.
          </p>
        </div>

        {/* Laptop mockup */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary rounded-t-xl p-2">
            <div className="flex gap-1.5 px-2">
              <div className="h-2.5 w-2.5 rounded-full bg-accent/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary-foreground/20" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary-foreground/20" />
            </div>
          </div>
          <div className="bg-primary/90 rounded-b-xl p-6 md:p-10 border-x-4 border-b-4 border-primary">
            {/* Mock dashboard content */}
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "Total Revenue", value: "$142,800", change: "+12%" },
                  { label: "Collected", value: "$118,500", change: "+18%" },
                  { label: "Pending", value: "$18,200", change: "-8%" },
                  { label: "Overdue", value: "$6,100", change: "-24%" },
                ].map((s) => (
                  <div key={s.label} className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                    <p className="text-[10px] md:text-xs text-primary-foreground/50">{s.label}</p>
                    <p className="text-sm md:text-xl font-bold text-primary-foreground">{s.value}</p>
                    <p className={`text-[10px] md:text-xs font-medium ${s.change.startsWith('+') ? 'text-green-400' : 'text-accent'}`}>
                      {s.change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mock line chart */}
              <div className="bg-primary-foreground/5 rounded-lg p-4">
                <svg viewBox="0 0 400 100" className="w-full h-20 md:h-32">
                  <polyline
                    points="0,80 40,70 80,60 120,65 160,45 200,50 240,30 280,35 320,20 360,25 400,10"
                    fill="none"
                    stroke="hsl(0 100% 70%)"
                    strokeWidth="2"
                  />
                  <polyline
                    points="0,90 40,85 80,80 120,75 160,70 200,65 240,60 280,55 320,50 360,48 400,45"
                    fill="none"
                    stroke="hsl(0 0% 100% / 0.3)"
                    strokeWidth="2"
                    strokeDasharray="4"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Laptop base */}
          <div className="mx-auto w-[60%] h-3 bg-muted rounded-b-xl" />
          <div className="mx-auto w-[80%] h-1 bg-muted/60 rounded-b-lg" />
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
