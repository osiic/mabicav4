import { Links, itemsTypes } from "./Links";

const social: itemsTypes[] = [
  { title: "Instagram", href: "https://instagram.com" },
  { title: "Tiktok", href: "https://instagram.com" },
  { title: "Spotify", href: "https://instagram.com" },
];

const contact: itemsTypes[] = [
  { title: "mabica.crative@gmail.com", href: "https://instagram.com" },
  { title: "(+62)21 29650800", href: "https://instagram.com" },
];

export function Others() {
  return (
    <div className="flex lg:flex-row flex-col flex-wrap gap-4">
      <Links heading="Follow Us" items={social} />
      <Links heading="Contact" items={contact} />
    </div>
  );
}
