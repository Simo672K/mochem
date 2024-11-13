import { navLinks } from "@/components/sidebar/sidebarContent";
import SidebarHeader from "@/components/sidebar/SidebarHeader";
import SidebarLink from "@/components/sidebar/SidebarLink";
import SidebarLinks from "@/components/sidebar/SidebarLinks";
import { sidebarCtx } from "@/context/sidebarCtx";
import { cn } from "@/lib/utils";
import { useContext } from "react";

const SidebarNav = () => {
  const { shrink } = useContext(sidebarCtx);
  return (
    <div
      className={cn(
        "border-r pt-8 px-2 transition-[width_ease] duration-200",
        shrink ? "w-14 px-0" : "w-72"
      )}
    >
      <SidebarHeader />
      <SidebarLinks>
        {navLinks.map((link) => (
          <SidebarLink
            key={link.to}
            shrink={shrink}
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
