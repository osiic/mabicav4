import { Logo } from "@/components/ui/logo";
import { Small } from "@/components/typography/small";

export function FooterLogo() {
  return (
    <div className="flex flex-col gap-2">
      <Logo />
      <Small>
        Lazy to read? Just Listen, <br /> Stories Await.
      </Small>
    </div>
  );
}
