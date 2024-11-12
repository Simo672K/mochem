import Sidebar from "@/components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-full flex">
      <Sidebar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
