import { FaArrowLeft } from "react-icons/fa";
import useUIStore from "@/zustand/uiManagementStore";

const SidebarBtn = () => {
    const toggleSidebar = useUIStore((state) => state.toggleSidebar);
    const sidebarOpen = useUIStore((state) => state.sidebarOpen);

    return (
        <div className=" hidden lg:flex toggle-sidebar-btn h-[var(--header-height)]   absolute w-full left-0 z-1000  items-center flex">
            <div className="sidebar-btn-con absolute -translate-x-5 rounded-full scale-0 duration-200 bg-bg dark:bg-bg-d flex items-center justify-center h-10 w-10 left-0">
                <button
                    onClick={() => toggleSidebar()}
                    className={`h-8 w-8 text-primary text-center outline-0 flex items-center justify-center duration-200 transition-transform bg-unit-bg dark:bg-unit-d rounded-full ${sidebarOpen ? "rotate-180" : "rotate-0"}`}
                >
                    <FaArrowLeft size={17} />
                </button>
            </div>
        </div>
    );
};

export default SidebarBtn;
