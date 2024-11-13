import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
interface Props {
  icon: React.ReactNode;
  label: string;
  to: string;
  shrink?: boolean;
}

const SidebarLink = ({ icon, label, to, shrink }: Props) => {
  return (
    <li className="block min-w-6">
      <NavLink
        className={({ isActive }) =>
          cn(
            "flex items-center hover:text-blue-600",
            isActive && "text-blue-600"
          )
        }
        to={to}
      >
        {icon}
        {!shrink && <span className="ms-4">{label}</span>}
      </NavLink>
    </li>
  );
};
export default SidebarLink;
