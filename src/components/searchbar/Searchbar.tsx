import { Notification02Icon } from "hugeicons-react";
import SearchField from "@/components/input/SearchField";
import DatetimeDisplay from "../display/DatetimeDisplay";

const Searchbar = () => {
  return (
    <div className="bg-white px-4 py-2 border rounded-lg flex items-center text-gray-700">
      <div className=" pe-3 border-r">
        <Notification02Icon />
      </div>
      <SearchField />
      <DatetimeDisplay />
    </div>
  );
};
export default Searchbar;
