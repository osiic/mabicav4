import { cn } from "@/lib/utils";

export interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function P({ children, className }: ParagraphProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground text-sm",
        "md:text-base",
        "lg:text-2xl",
        className,
      )}
    >
      {children}
    </p>
  );
}
