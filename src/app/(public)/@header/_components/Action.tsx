import { Mode } from "./Mode";
import { Menu } from "./Menu";

export function Action() {
  return (
    <div className="flex h-full justify-center items-center gap-2 ">
      <Mode />
      <Menu />
    </div>
  );
}
