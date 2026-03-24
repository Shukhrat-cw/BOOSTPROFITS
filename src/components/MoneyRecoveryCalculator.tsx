import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";

interface Props {
  onComplete: () => void;
}

const MoneyRecoveryCalculator = ({ onComplete }: Props) => {
  const [step, setStep] = useState<"input" | "results">("input");
  const [revenue, setRevenue] = useState("");
  const [unpaidPercent, setUnpaidPercent] = useState("");
  const [delayDays, setDelayDays] = useState("");

  const monthlyRevenue = parseFloat(revenue) || 0;
  const unpaid = parseFloat(unpaidPercent) || 0;
  const delay = parseInt(delayDays) || 0;

  const overdueAmount = (monthlyRevenue * unpaid) / 100;
  const estimatedOverdueInvoices = Math.max(1, Math.round(overdueAmount / (monthlyRevenue / 20 || 1)));
  const annualLoss = overdueAmount * 12;
  const potentialRecovery30 = overdueAmount * 0.65;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (monthlyRevenue > 0 && unpaid > 0) {
      setStep("results");
    }
  };

  if (step === "results") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <div className="bg-card rounded-2xl shadow-2xl p-8 space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mx-auto">
                <AlertTriangle className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-primary">Your Money is Slipping Away</h2>
              <p className="text-sm text-muted-foreground">Here's what late payments are costing you</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 text-center space-y-1">
                <p className="text-xs text-muted-foreground">Overdue Invoices</p>
                <p className="text-3xl font-extrabold text-destructive">~{estimatedOverdueInvoices}</p>
                <p className="text-xs text-muted-foreground">per month</p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 text-center space-y-1">
                <p className="text-xs text-muted-foreground">Monthly Loss</p>
                <p className="text-3xl font-extrabold text-destructive">${overdueAmount.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">in unpaid invoices</p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 text-center space-y-1">
                <p className="text-xs text-muted-foreground">Annual Loss</p>
                <p className="text-3xl font-extrabold text-destructive">${annualLoss.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">if nothing changes</p>
              </div>
              <div className="bg-accent/5 border border-accent/30 rounded-xl p-4 text-center space-y-1">
                <p className="text-xs text-muted-foreground">Recoverable in 30 Days</p>
                <p className="text-3xl font-extrabold text-accent">${potentialRecovery30.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">with Boost Profits</p>
              </div>
            </div>

            {/* Mini projected chart */}
            <div className="bg-muted/50 rounded-xl p-4 space-y-2">
              <p className="text-xs font-semibold text-primary">Projected vs Actual Cash Flow</p>
              <div className="flex items-end gap-1 h-20">
                {[40, 45, 38, 50, 55, 60, 68, 75, 82, 88, 92, 95].map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-0.5">
                    <div className="rounded-t-sm bg-accent/70" style={{ height: `${v}%` }} />
                    <div className="rounded-t-sm bg-muted-foreground/20" style={{ height: `${Math.max(10, v - 25)}%` }} />
                  </div>
                ))}
              </div>
              <div className="flex gap-4 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-accent/70" /> With Boost Profits</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-muted-foreground/20" /> Current trajectory</span>
              </div>
            </div>

            <Button
              onClick={onComplete}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold py-6 text-base transition-transform hover:scale-[1.02]"
            >
              Start Free Trial — Get Your Money Back Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <button onClick={onComplete} className="w-full text-sm text-muted-foreground hover:text-primary transition-colors">
              Skip for now →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-2xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mx-auto">
              <DollarSign className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-primary">How Much Are Late Payments Costing You?</h2>
            <p className="text-sm text-muted-foreground">
              Tell us about your business and we'll show you the impact
            </p>
          </div>

          <form onSubmit={handleCalculate} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="revenue">Average Monthly Revenue ($) *</Label>
              <Input
                id="revenue"
                type="number"
                placeholder="e.g. 50000"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                min="1"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="unpaid">% of Invoices Unpaid on Time *</Label>
              <Input
                id="unpaid"
                type="number"
                placeholder="e.g. 15"
                value={unpaidPercent}
                onChange={(e) => setUnpaidPercent(e.target.value)}
                min="1"
                max="100"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="delay">Typical Invoice Delay (days)</Label>
              <Input
                id="delay"
                type="number"
                placeholder="e.g. 30"
                value={delayDays}
                onChange={(e) => setDelayDays(e.target.value)}
                min="1"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold py-6 text-base transition-transform hover:scale-[1.02]"
            >
              <TrendingUp className="mr-2 h-5 w-5" /> Calculate My Losses
            </Button>
          </form>

          <button onClick={onComplete} className="w-full text-sm text-muted-foreground hover:text-primary transition-colors">
            Skip for now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoneyRecoveryCalculator;
