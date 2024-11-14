import { Search01Icon } from "hugeicons-react";

const SearchField = () => {
  return (
    <div className="flex ms-6 pe-3 border-r">
      <Search01Icon />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none ms-4 w-52"
      />
    </div>
  );
};
export default SearchField;
