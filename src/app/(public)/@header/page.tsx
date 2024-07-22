import { Logo } from "@/components/ui/logo";
import { Action } from "./_components/Action";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed z-40 top-0 right-0 left-0 backdrop-blur-xl">
      <header className="container w-screen flex justify-between items-center py-5">
        <Logo className="lg:w-2/12" />

        <nav>
          <ul className="hidden lg:flex gap-4 text-lg font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About Us</Link>
            </li>
            <li>
              <Link href="#gallery">Gallery</Link>
            </li>
            <li>
              <Link href="#team">Our Team</Link>
            </li>
          </ul>
        </nav>

        <Action />
      </header>
    </div>
  );
}
