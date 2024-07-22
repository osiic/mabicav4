import { cn } from "@/lib/utils";

export interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function P({ children, className }: ParagraphProps) {
  return (
    <p
      className={cn(
        className,
        "text-muted-foreground text-sm",
        "md:text-base",
        "lg:text-lg",
        "xl:text-xl"
      )}
    >
      {children}
    </p>
  );
}
