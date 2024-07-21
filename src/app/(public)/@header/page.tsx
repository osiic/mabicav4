import { Logo } from "@/components/ui/logo";
import {Action} from "./_components/Action"

export default function Header() {
  return (
    <div className="fixed z-40">
      <header className="container backdrop-blur-xl w-screen flex justify-between items-center py-5">
        <Logo />

        <nav className="hidden"></nav>
        <Action />
      </header>
    </div>
  );
}
