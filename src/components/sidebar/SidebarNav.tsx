import { DashboardSquare02Icon, UserMultiple02Icon } from "hugeicons-react";
import SidebarHeader from "./SidebarHeader";
import SidebarLink from "./SidebarLink";
import SidebarLinks from "./SidebarLinks";

type NavLink = {
  to: string;
  icon: React.ReactNode;
  label: string;
};

const SidebarNav = () => {
  const navLinks: NavLink[] = [
    {
      to: "/",
      icon: <DashboardSquare02Icon />,
      label: "Dashboard",
    },
    {
      to: "/employee",
      icon: <UserMultiple02Icon />,
      label: "Employees",
    },
  ];
  return (
    <div className="border-r w-72 pt-8 px-2">
      <SidebarHeader />
      <SidebarLinks>
        {navLinks.map((link) => (
          <SidebarLink
            key={link.to}
            to={link.to}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </SidebarLinks>
    </div>
  );
};
export default SidebarNav;
