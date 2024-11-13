import SidebarAvatar from "@/components/sidebar/SidebarAvatar";
import SidebarNav from "@/components/sidebar/SidebarNav";
import SidebarUsers from "@/components/sidebar/SidebarUsers";
import { SidebarCtxProvider } from "@/context/sidebarCtx";

const Sidebar = () => {
  return (
    <aside className="flex">
      <SidebarCtxProvider>
        <SidebarUsers>
          <SidebarAvatar active />
        </SidebarUsers>
        <SidebarNav />
      </SidebarCtxProvider>
    </aside>
  );
};
export default Sidebar;
