import { cn } from "@/lib/utils";

type props = {
  children: React.ReactNode;
  className?: string;
};

export function H4({ children, className }: props) {
  return (
    <h4
      className={cn(
        className,
        "scroll-m-20 text-xl font-semibold tracking-tight",
      )}
    >
      {children}
    </h4>
  );
}
