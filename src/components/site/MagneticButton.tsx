import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: "solid" | "outline";
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

/** Primary CTA. Magnetic pull is desktop-only and disabled for touch users. */
export function MagneticButton({
  children,
  href,
  className,
  variant = "solid",
  ariaLabel,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isMobile = useIsMobile();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 22);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 14);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-[0.14em] uppercase transition-colors duration-300",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta",
        variant === "solid"
          ? "bg-terracotta text-cream hover:bg-terracotta/90"
          : "border border-current text-current hover:bg-current/10",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
