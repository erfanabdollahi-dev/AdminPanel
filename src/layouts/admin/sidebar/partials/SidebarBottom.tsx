import ThemeButton from "@/components/ThemeButton";
import { LuLogOut } from "react-icons/lu";


const SidebarBottom = () => {
      console.log("sidebar bottom");
    return (
        <div className="sidebar-bottom">
            <ThemeButton />
            <div className="flex gap-2  group  ">
                <LuLogOut size={27} className="text-red-500 duration-200 group-hover:text-red-600" />
                <span>خروج</span>
            </div>
        </div>
    );
};

export default SidebarBottom;
