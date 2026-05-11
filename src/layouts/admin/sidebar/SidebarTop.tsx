import { SiPhpmyadmin } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
const SidebarTop = () => {
  return (
    <>
      <div className="toggle-sidebar-btn h-[var(--header-height)]   absolute w-full left-0   items-center flex">
        <div className="sidebar-btn-con absolute -translate-x-5 rounded-full scale-0 duration-200 bg-bg-d flex items-center justify-center h-10 w-10 left-0">
          <button className="h-8 w-8 text-primary text-center outline-0 flex items-center justify-center bg-unit-bg-d rounded-full">
            <FaArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="sidebar-top h-[var(--header-height)] shrink-0  px-6 flex items-center justify-center text-white w-full">
        <SiPhpmyadmin size={50} color="" />
        <h3>پنل ادمین</h3>
      </div>
    </>
  );
};

export default SidebarTop;
