interface BadgeProps {
  label: string;
  color?: string;
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  label,
  color = "var(--mint-400)",
  size = "sm",
  className = "",
}: BadgeProps) {
  const padding = size === "sm" ? "px-2 py-0.5 text-[9px]" : "px-3 py-1 text-[10px]";

  return (
    <span
      className={`inline-block font-bold tracking-[0.15em] uppercase border rounded-sm ${padding} ${className}`}
      style={{
        color,
        borderColor: `${color}33`,
        background: `${color}0a`,
        fontFamily: "var(--font-mono)",
      }}
    >
      {label}
    </span>
  );
}
