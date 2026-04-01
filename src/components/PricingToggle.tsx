import { cn } from "@/lib/utils";

interface PricingToggleProps {
  annual: boolean;
  onAnnualChange: (annual: boolean) => void;
  className?: string;
}

const PricingToggle = ({ annual, onAnnualChange, className }: PricingToggleProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-3 select-none", className)}>
      <span
        className={cn(
          "text-sm font-medium transition-colors",
          annual ? "text-muted-foreground" : "text-foreground",
        )}
      >
        Monthly
      </span>

      <button
        type="button"
        role="switch"
        aria-checked={annual}
        aria-label="Toggle annual pricing"
        onClick={() => onAnnualChange(!annual)}
        className={cn(
          "relative inline-flex h-8 w-14 shrink-0 overflow-hidden rounded-full border border-border/70 bg-muted p-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          annual && "border-accent/40 bg-accent/15",
        )}
      >
        <span
          className={cn(
            "pointer-events-none absolute left-1 top-1 h-6 w-6 rounded-full bg-background shadow-md ring-1 ring-border/60 transition-transform duration-300 ease-out will-change-transform",
            annual ? "translate-x-6" : "translate-x-0",
          )}
        />
      </button>

      <span
        className={cn(
          "text-sm font-medium transition-colors",
          annual ? "text-foreground" : "text-muted-foreground",
        )}
      >
        Annual <span className="text-accent text-xs font-bold">Save 17%</span>
      </span>
    </div>
  );
};

export default PricingToggle;
