
import SidebarTop from "./SidebarTop";
import SidebarItems from "./SidebarItems";
import './sidebar.css'
const Sidebar = () => {
  return (
    <aside className="al-sidebar sidebar-closed   ">
      <SidebarTop />

      <SidebarItems />
    </aside>
  );
};

export default Sidebar;
