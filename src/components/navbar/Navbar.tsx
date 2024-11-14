import NavbarButton from "../button/NavbarButton";
import Searchbar from "../searchbar/Searchbar";

const Navbar = () => {
  return (
    <nav className="px-10 pt-8 border-b pb-2 flex items-center">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="flex-grow flex justify-center">
        <Searchbar />
      </div>
      <NavbarButton />
    </nav>
  );
};
export default Navbar;
