interface PulicLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export default function PublicLayout({ header, children, footer }: PulicLayoutProps) {
  return (
    <div className="background">
      {header}
      {children}
      {footer}
    </div>
  );
}
