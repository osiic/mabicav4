import { Button } from "@/components/ui/button";

export function Filters() {
  return (
      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" size="sm">
          All
        </Button>
        <Button variant="active" size="sm">
          Audiobook
        </Button>
        <Button variant="secondary" size="sm">
          One
        </Button>
        <Button variant="secondary" size="sm">
        two
        </Button>
        <Button variant="secondary" size="sm">
        Thr
        </Button>
      </div>
  )
}
