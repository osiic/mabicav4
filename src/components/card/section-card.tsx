import { H2 } from "@/components/typography/h2";
import { Filters } from "./filters";
import { Cards } from "./cards";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  heading: string;
  id: string;
  className?: string;
}

export function SectionCard({ heading, className, id }: SectionCardProps) {
  return (
    <section id={id} className={cn("container py-5 lg:py-10", className)}>
      <H2>{heading}</H2>
      <Filters />
      <Cards />
    </section>
  );
}
