import { Mode } from "./Mode";
import { Menu } from "./Menu";

export function Action() {
  return (
    <div className="lg:w-2/12 overflow-hidden">
      <div className="lg:float-right flex h-full justify-center items-center gap-1 ">
        <Mode />
        <Menu />
      </div>
    </div>
  );
}
