import { cn } from "@/lib/utils";

type props = {
  children: React.ReactNode;
  className?: string;
};

export function H3({ children, className }: props) {
  return (
    <h3
      className={cn(
        className,
        "scroll-m-20 text-base font-semibold tracking-tight",
      )}
    >
      {children}
    </h3>
  );
}
