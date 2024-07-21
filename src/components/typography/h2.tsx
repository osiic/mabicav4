import { cn } from "@/lib/utils";

type props = {
  children: React.ReactNode;
  className?: string;
};

export function H2({ children, className }: props) {
  return (
    <h2
      className={cn(
        className,
        "scroll-m-20 text-lg font-semibold tracking-tight first:mt-0",
      )}
    >
      {children}
    </h2>
  );
}
