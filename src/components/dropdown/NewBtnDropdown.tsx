import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ArrowDown01Icon,
  Briefcase02Icon,
  UserMultiple02Icon,
} from "hugeicons-react";

const NewBtnDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-blue-800 hover:text-white border-l rounded-none rounded-tr rounded-br px-3 focus-visible:ring-0"
        >
          <ArrowDown01Icon className="stroke-[2]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-40 bg-white text-gray-600 px-1 py-1 border mt-1 right-0 me-10 shadow-sm">
        <DropdownMenuItem asChild>
          <button className="hover:outline-none hover:bg-gray-50 py-1 px-3 rounded flex items-center w-full">
            <UserMultiple02Icon className="me-2" size={20} />
            Employee
          </button>
        </DropdownMenuItem>
        <hr />
        <DropdownMenuItem asChild>
          <button className="hover:outline-none hover:bg-gray-50 py-1 px-3 rounded flex items-center w-full">
            <Briefcase02Icon className="me-2" size={20} />
            Job
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NewBtnDropdown;
