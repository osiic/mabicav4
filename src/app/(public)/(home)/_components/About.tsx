import Image from "next/image";
import { H2 } from "@/components/typography/h2";
import { P } from "@/components/typography/p";

export function About() {
  return (
    <section id="about" className="container py-5">
      <div className="overflow-hidden rounded-xl lg:rounded-3xl md:rounded-2xl">
        <div className="flex flex-col gap-4 lg:flex-row-reverse">
          <div className="flex-1 space-y-2 lg:space-y-4 lg:pt-20">
            <H2>#About Us</H2>
            <P>
              Use custom emoji, stickers, soundboard effects and more to add
              your personality to your voice, video, or text chat. Set your
              avatar and a custom status, and write your own profile to show up
              in chat your way.
            </P>
          </div>
          <div className="lg:w-6/12">
            <Image
              className="w-full h-full"
              src="/about-us.png"
              alt="Image About"
              width="250"
              height="250"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
