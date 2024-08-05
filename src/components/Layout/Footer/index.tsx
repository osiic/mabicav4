import { Others } from "./_components/Others";
import { FooterLogo } from "./_components/FooterLogo";
import { P } from "@/components/typography/p";

export function Footer() {
  return (
    <footer className="container py-10 space-y-4">
      <div className="flex lg:flex-row gap-4 flex-col justify-between">
        <FooterLogo />
        <Others />
      </div>
      <P>© 2024 Mabica Group. All Rights Reserved.</P>
    </footer>
  );
}
