import SidebarTop from "./SidebarTop";
import SidebarItems from "./SidebarItems";
import "./sidebar.css";
import useUIStore from "@/zustand/uiManagementStore";
const Sidebar = () => {
    const sidebarOpen = useUIStore((state) => state.sidebarOpen);
    const setSidebar = useUIStore((state) => state.setSidebar);
    const handleSidebarClick = () => {
        if (!sidebarOpen) {
            setSidebar(true);
        }
    };
    return (
        <aside
            onClick={handleSidebarClick}
            className={`al-sidebar ${sidebarOpen ? "" : "sidebar-closed"}`}
        >
            <SidebarTop />

            <SidebarItems />
        </aside>
    );
};

export default Sidebar;
