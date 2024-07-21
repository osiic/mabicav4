import Image from "next/image";

export function Banner() {
  return (
    <section id="banner" className="container py-5">
      <div className="overflow-hidden rounded-xl">
        <Image
          className=""
          src="/banner.png"
          alt="audiobook banner"
          width="1200"
          height="700"
        />
      </div>
    </section>
  );
}
