import { cn } from "@/lib/utils";

type props = {
  children: React.ReactNode;
  className?: string;
};

export function Small({ children, className }: props) {
  return (
    <small
      className={cn(
        className,
        "font-medium text-muted-foreground text-base leading-none",
        "lg:text-lg"
      )}
    >
      {children}
    </small>
  );
}
