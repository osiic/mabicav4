import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine } from "lucide-react";

export default function AudiobookPage() {
  return (
    <div className="pt-20 lg:pt-30">
      <span className="container py-4 opacity-50 text-base font-medium flex gap-1">
        <ArrowLeftFromLine />
        <Link href="/audiobooks">Audiobooks</Link> /
        <Link href="/audiobooks/storu">Story</Link>
      </span>
      <main className="container ">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-2 lg:w-4/12">
            <Image
              className="w-full rounded-md"
              src="/audiobook.png"
              alt="Audiobook image"
              width="600"
              height="350"
            />
            <Link href="/audiobooks/storu">
              <Button className="w-full">Start Read</Button>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl lg:text-3xl">The Book Of emy</h1>
              <ul className="text-base text-muted-foreground lg:text-lg">
                <li>Chapters: 13</li>
                <li>Status: Ongoing</li>
                <li>Posted: 12 Juli 2024</li>
                <li>Gendre: Fantasy, Mistery</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-xl lg:text-2xl">Related Party</h2>
              <ul className="text-base text-muted-foreground lg:text-lg">
                <li>Art: @Atlas</li>
                <li>Author: @Karin</li>
                <li>Editor: @Karin</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-xl lg:text-2xl">Synopsis</h2>
              <div className="text-base text-muted-foreground lg:text-lg">
                <p>
                  Cha Joo-young dipenjara di sebuah pusat tahanan remaja karena
                  dia menyebabkan ayahnya yang seorang gangster koma.
                </p>
                <p>
                  Selang beberapa saat, ayahnya, yang diduga tidak akan pernah
                  membuka mata, datang untuk mengunjungi dan memberitahunya.
                </p>
                <p>“Nak, aku membunuh teman masa kecilmu.”</p>
                <p>
                  Hanya ada satu cara untuk membalas dendam kepada ayah yang
                  seperti itu: dengan mengambil alih kendali penjara ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="about" className="container space-y-4 py-5">
        <h2 className="text-xl font-semibold"># Chapters</h2>
        <div className="grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4">
          <Button
            variant="secondary"
            className="lg:px-4 lg:text-lg "
            asChild
            size="sm"
          >
            <Link href="/audiobooks/stroru/storu-chapter-1">Chapter</Link>
          </Button>

          <Button
            variant="secondary"
            className="lg:px-4 lg:text-lg "
            asChild
            size="sm"
          >
            <Link href="/audiobooks/stroru/storu-chapter-1">Chapter</Link>
          </Button>

          <Button
            variant="secondary"
            className="lg:px-4 lg:text-lg "
            asChild
            size="sm"
          >
            <Link href="/audiobooks/stroru/storu-chapter-1">Chapter</Link>
          </Button>

          <Button
            variant="secondary"
            className="lg:px-4 lg:text-lg "
            asChild
            size="sm"
          >
            <Link href="/audiobooks/stroru/storu-chapter-1">Chapter</Link>
          </Button>

          <Button
            variant="secondary"
            className="lg:px-4 lg:text-lg "
            asChild
            size="sm"
          >
            <Link href="/audiobooks/stroru/storu-chapter-1">Chapter</Link>
          </Button>

          <Button
            variant="secondary"
            className="lg:px-4 lg:text-lg "
            asChild
            size="sm"
          >
            <Link href="/audiobooks/stroru/storu-chapter-1">Chapter</Link>
          </Button>

          <Button
            variant="secondary"
            className="lg:px-4 lg:text-lg "
            asChild
            size="sm"
          >
            <Link href="/audiobooks/stroru/storu-chapter-1">Chapter</Link>
          </Button>

          <Button
            variant="secondary"
            className="lg:px-4 lg:text-lg "
            asChild
            size="sm"
          >
            <Link href="/audiobooks/stroru/storu-chapter-1">Chapter</Link>
          </Button>
          <Button
            variant="secondary"
            className="lg:px-4 lg:text-lg "
            asChild
            size="sm"
          >
            <Link href="/audiobooks/stroru/storu-chapter-1">Chapter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
