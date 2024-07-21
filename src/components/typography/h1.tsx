import { cn } from "@/lib/utils";

type props = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: props) {
  return (
    <h1
      className={cn(
        className,
        "scroll-m-20 text-lg font-semibold tracking-tight",
      )}
    >
      {children}
    </h1>
  );
}
