import Link from "next/link";
import { H3 } from "@/components/typography/h3";
import { Small } from "@/components/typography/small";

export interface itemsTypes {
  title: string;
  href: string;
}

interface LinksProps {
  heading: string;
  items: itemsTypes[];
}

export function Links({ heading, items }: LinksProps) {
  return (
    <div className="space-y-2">
      <H3>{heading}</H3>
      <ul className="text-muted-foreground ">
        {items.map((i) => (
          <li key={i?.title}>
            <Link href={i?.href}>
              <Small>
              {i?.title}
              </Small>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
