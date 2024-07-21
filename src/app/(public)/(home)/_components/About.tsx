import Image from "next/image";
import { H2 } from "@/components/typography/h2";
import { P } from "@/components/typography/p";

export function About() {
  return (
    <section id="about" className="container py-5">
      <div className="overflow-hidden rounded-xl bg-card py-2 px-4">
        <H2>#About Us</H2>
        <P>
          Use custom emoji, stickers, soundboard effects and more to add your
          personality to your voice, video, or text chat. Set your avatar and a
          custom status, and write your own profile to show up in chat your way.
        </P>
        <div className="">
          <Image
            className="w-full h-full"
            src="/about-us.png"
            alt="Image About"
            width="250"
            height="250"
          />
        </div>
      </div>
    </section>
  );
}
