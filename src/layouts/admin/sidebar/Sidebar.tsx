import SidebarTop from "./partials/SidebarTop";
import SidebarItems from "./partials/SidebarItems";
import "./sidebar.css";
import useUIStore from "@/zustand/uiManagementStore";

import SidebarBottom from "./partials/SidebarBottom";

const Sidebar = () => {
    const sidebarOpen = useUIStore((state) => state.sidebarOpen);
  console.log("sidebar");
    return (
        <aside className={`al-sidebar ${sidebarOpen ? "" : "sidebar-closed"}`}>
            <SidebarTop />

            <SidebarItems />

            <SidebarBottom />
        </aside>
    );
};




export default Sidebar;
