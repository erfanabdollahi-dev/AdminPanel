import { SiPhpmyadmin } from "react-icons/si";

import SidebarBtn from "@/components/SidebarBtn";
const SidebarTop = () => {


    return (
        <>
            <SidebarBtn />
            <div className="sidebar-top">
                <SiPhpmyadmin size={50}  />
                <h3>پنل ادمین</h3>
            </div>
        </>
    );
};

export default SidebarTop;
