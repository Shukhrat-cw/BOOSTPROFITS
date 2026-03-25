interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

const Logo = ({ className = "", size = 32, showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="20" r="14" fill="hsl(4 90% 58%)" opacity="0.9" />
        <circle cx="26" cy="20" r="14" fill="hsl(220 60% 12%)" opacity="0.85" />
        {/* Overlap area */}
        <path d="M20 8.5a14 14 0 010 23 14 14 0 000-23z" fill="hsl(4 90% 58%)" opacity="0.6" />
      </svg>
      {showText && (
        <span className="font-display text-xl font-bold tracking-tight">
          Boost<span className="text-accent">Profits</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
