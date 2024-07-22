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
        "md:text-xl",
        "lg:text-2xl",
        "xl:text-3xl"
      )}
    >
      {children}
    </h1>
  );
}
