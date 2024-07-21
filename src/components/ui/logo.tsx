import Link from "next/link";
import Image from "next/image";
import { Large } from "@/components/typography/large";

import { cn } from "@/lib/utils";

export function Logo({}) {
  return (
    <Link href="/" className={cn("flex gap-1 items-center")}>
      <div className="w-10 lg:w-16">
        <Image
          src="/logo.svg"
          width="64"
          height="64"
          alt="mabica logo"
          className="w-full h-full"
        />
      </div>
      <Large>Mabica</Large>
    </Link>
  );
}
