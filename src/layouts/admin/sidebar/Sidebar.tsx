import SidebarTop from "./SidebarTop";
import SidebarItems from "./SidebarItems";
import "./sidebar.css";
import useUIStore from "@/zustand/uiManagementStore";
const Sidebar = () => {
    const sidebarOpen = useUIStore((state) => state.sidebarOpen);

 
    return (
        <aside
   
            className={`al-sidebar ${sidebarOpen ? "" : "sidebar-closed"}`}
        >
            <SidebarTop />

            <SidebarItems />
        </aside>
    );
};

export default Sidebar;
