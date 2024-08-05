import { Button } from "@/components/ui/button";
import { H2 }  from "@/components/typography/h2"
import Link from "next/link"

export function Donation() {
  return (
    <section id="donation" className="container py-5">
      <div className="overflow-hidden rounded-xl bg-primary/80 w-full flex flex-col items-center gap-2 lg:gap-4 lg:py-16 py-5">
        <H2 className="opacity-80 text-center">Your Donation, Our Future.</H2>
        <Link href="/audiobook">
          <Button variant="active">Donation</Button>
        </Link>
      </div>
    </section>
  );
}
