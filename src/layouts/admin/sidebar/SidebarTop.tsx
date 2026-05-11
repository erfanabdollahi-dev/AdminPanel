import { SiPhpmyadmin } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import useUIStore from "@/zustand/uiManagementStore";
const SidebarTop = () => {
  const sidebarOpen = useUIStore((state) => state.sidebarOpen);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <>
      <div className="toggle-sidebar-btn h-[var(--header-height)]   absolute w-full left-0 z-1000  items-center flex">
        <div className="sidebar-btn-con absolute -translate-x-5 rounded-full scale-0 duration-200 bg-bg dark:bg-bg-d flex items-center justify-center h-10 w-10 left-0">
          <button
            onClick={() => toggleSidebar()}
            className="h-8 w-8 text-primary text-center outline-0 flex items-center justify-center bg-unit-bg dark:bg-unit-d rounded-full"
          >
            <FaArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="sidebar-top h-[var(--header-height)] shrink-0  px-6 flex items-center justify-center  w-full">
        <SiPhpmyadmin size={50} color="" />
        <h3>پنل ادمین</h3>
      </div>
    </>
  );
};

export default SidebarTop;
