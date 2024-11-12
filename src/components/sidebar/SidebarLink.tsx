import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
interface Props {
  icon: React.ReactNode;
  label: string;
  to: string;
}

const SidebarLink = ({ icon, label, to }: Props) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          cn("flex items-center", isActive && "text-blue-600")
        }
        to={to}
      >
        {icon}
        <span className="ms-4">{label}</span>
      </NavLink>
    </li>
  );
};
export default SidebarLink;
