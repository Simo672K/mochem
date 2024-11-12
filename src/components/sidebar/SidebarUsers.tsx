import AddNewUser from "./AddNewUser";

interface Props {
  children?: React.ReactNode;
}

const SidebarUsers = ({ children }: Props) => {
  return (
    <div className="w-20 border-r-2 p-2 pt-8">
      <ul className="flex flex-col items-center gap-2">
        {children}
        <AddNewUser />
      </ul>
    </div>
  );
};
export default SidebarUsers;
