import Link from "next/link";
import Image from "next/image";

import { H3 } from "@/components/typography/h3";
import { P } from "@/components/typography/p";
import { Button } from "@/components/ui/button";

export function Card() {
  return (
    <Link href="/audiobooks/story">
      <div className="overflow-hidden rounded-xl mb-2 relative">
        <Button
          asChild
          className="absolute lg:px-4 lg:text-lg bottom-2 left-2"
          variant="secondary"
          size="sm"
        >
          <span>Ongoing</span>
        </Button>
        <Image
          className="w-full"
          src="/audiobook.png"
          alt="Audiobook image"
          width="600"
          height="350"
        />
      </div>
      <H3>The Book Of Cemy</H3>
      <P className="line-clamp-2 lg:text-lg">
        Judul asli, The Hero Returns Penulis: B.Ain kisah kepahlawanan Kim Sung
        BIn untuk menyelamatkan dunia dan dia kembali ke dua puluh tahun silam,
        maka dia memulai petualangannya kembali dan menjadi seorang pahlawan
        karena diberikan waktu untuk mengubah segalanya.
      </P>
    </Link>
  );
}
