import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";

interface PulicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PulicLayoutProps) {
  return (
    <div className="background">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
