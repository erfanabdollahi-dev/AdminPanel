
import SidebarTop from "./SidebarTop";
import SidebarItems from "./SidebarItems";
const Sidebar = () => {
  return (
    <aside className="al-sidebar gap-5 ">
      <SidebarTop />

      <SidebarItems />
    </aside>
  );
};

export default Sidebar;
