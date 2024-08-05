import { Card } from "./card";

export function Cards() {
  return (
    <div className="grid gap-2 grid-cols-2 lg:grid-cols-4 mt-2">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
