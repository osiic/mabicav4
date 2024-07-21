import { cn } from "@/lib/utils";

type props = {
  children: React.ReactNode;
  className?: string;
};

export function Large({ children, className }: props) {
  return (
    <span
      className={cn(
        className,
        "text-lg font-semibold",
      )}
    >
      {children}
    </span>
  );
}
