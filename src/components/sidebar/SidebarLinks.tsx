import { sidebarCtx } from "@/context/sidebarCtx";
import { cn } from "@/lib/utils";
import { useContext } from "react";

interface Props {
  children?: React.ReactNode;
}

const SidebarLinks = ({ children }: Props) => {
  const { shrink } = useContext(sidebarCtx);
  return (
    <div className="mt-8">
      <ul className={cn("gap-4 flex flex-col", shrink ? "px-4" : "px-6")}>
        {children}
      </ul>
    </div>
  );
};
export default SidebarLinks;
