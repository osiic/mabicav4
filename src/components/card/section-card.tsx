import { H2 } from "@/components/typography/h2";
import { Filters } from "./filters";
import { Cards } from "./cards";

interface SectionCardProps {
  heading: string;
  id: string;
}

export function SectionCard({ heading, id }: SectionCardProps) {
  return (
    <section id={id} className="container py-5">
      <H2>{heading}</H2>
      <Filters />
      <Cards />
    </section>
  );
}
