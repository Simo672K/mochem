import AppLogo from "@/assets/logo.png";
import { sidebarCtx } from "@/context/sidebarCtx";
import { cn } from "@/lib/utils";
import { Menu01Icon } from "hugeicons-react";
import { useContext } from "react";

const SidebarHeader = () => {
  const { shrink, setShrink } = useContext(sidebarCtx);
  return (
    <header className="pb-1 border-b mb-4">
      <div className="flex mb-4">
        {!shrink && (
          <div className="w-48">
            <img src={AppLogo} alt="mochem logo" />
          </div>
        )}
        <button
          className={cn(shrink ? "mx-auto" : "ms-auto")}
          onClick={() => setShrink!((p: boolean) => !p)}
        >
          <Menu01Icon />
        </button>
      </div>
    </header>
  );
};
export default SidebarHeader;
