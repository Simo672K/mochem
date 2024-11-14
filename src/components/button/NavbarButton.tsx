import { Button } from "@/components/ui/button";
import { PlusSignIcon } from "hugeicons-react";
import NewBtnDropdown from "@/components/dropdown/NewBtnDropdown";

const NavbarButton = () => {
  return (
    <div className="w-fit bg-blue-600 rounded text-white">
      <Button variant="ghost" className="hover:bg-blue-800 hover:text-white">
        <PlusSignIcon className="stroke-2" />
        add new
      </Button>
      <NewBtnDropdown />
    </div>
  );
};
export default NavbarButton;
