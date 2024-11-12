import { PlusSignIcon } from "hugeicons-react";

const AddNewUser = () => {
  return (
    <li>
      <button className="bg-gray-200 p-3 mt-3 rounded-full">
        <PlusSignIcon size={22} className="text-gray-500 stroke-2" />
      </button>
    </li>
  );
};
export default AddNewUser;
