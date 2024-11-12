import SidebarAvatar from "@/components/sidebar/SidebarAvatar";
import SidebarNav from "@/components/sidebar/SidebarNav";
import SidebarUsers from "@/components/sidebar/SidebarUsers";

const Sidebar = () => {
  return (
    <aside className="flex">
      <SidebarUsers>
        <SidebarAvatar active />
      </SidebarUsers>
      <SidebarNav />
    </aside>
  );
};
export default Sidebar;
