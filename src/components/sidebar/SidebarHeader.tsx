import AppLogo from "@/assets/logo.png";
import { Menu01Icon } from "hugeicons-react";

const SidebarHeader = () => {
  return (
    <header className="pb-1 border-b mb-4">
      <div className="flex mb-4">
        <img src={AppLogo} className="w-44" alt="mochem logo" />
        <button className="ms-auto">
          <Menu01Icon />
        </button>
      </div>
    </header>
  );
};
export default SidebarHeader;
