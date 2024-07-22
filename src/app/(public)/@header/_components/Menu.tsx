"use client";

import { useState } from "react";
import { X, Menu as Hamburger } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Menu() {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setNav(!nav)} size="icon" variant="ghost" className="lg:hidden">
        {nav ? <X size="20" /> : <Hamburger size="20" />}
      </Button>
      {nav && (
        <div className="fixed top-0 left-0 right-0 z-[-100] bg-background">
          <nav className=" w-screen flex justify-center items-center h-screen container py-28">
            <ul className="space-x-2 text-lg font-medium">
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
        </div>
      )}
    </>
  );
}
