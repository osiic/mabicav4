import { Button } from "@/components/ui/button";

export function Filters() {
  return (
    <div className="flex flex-wrap gap-2 lg:gap-4 lg:pt-5 lg:pb-3">
      <Button variant="secondary" className="lg:px-4 lg:text-lg " size="sm">
        All
      </Button>
      <Button variant="active" className="lg:px-4 lg:text-lg " size="sm">
        Audiobook
      </Button>
      <Button variant="secondary" className="lg:px-4 lg:text-lg " size="sm">
        One
      </Button>
      <Button variant="secondary" className="lg:px-4 lg:text-lg " size="sm">
        two
      </Button>
      <Button variant="secondary" className="lg:px-4 lg:text-lg " size="sm">
        Thr
      </Button>
    </div>
  );
}
