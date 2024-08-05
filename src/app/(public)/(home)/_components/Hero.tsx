import { H1 } from "@/components/typography/h1";
import { P } from "@/components/typography/p";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export function Hero() {
  return (
    <main id="home" className="container lg:pt-48 lg:pb-28 py-5 pt-28 flex flex-col text-center justify-center items-center gap-2">
      <H1>Lazy to read? Just Listen, Stories Await.</H1>
      <P className="md:w-8/12 lg:w-6/12 lg:pt-3 lg:pb-8">
        Listening to stories as a practical way to enjoy the world of
        literature. Discover adventure through the sound of words.
      </P>
      <Link href="/audiobooks">
        <Button>Start Our Story</Button>
      </Link>
    </main>
  );
}
