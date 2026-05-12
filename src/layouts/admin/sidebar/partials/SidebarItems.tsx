// SidebarItems.tsx (unchanged, same as before)

import { sidebarItems } from "@/static/sidebarItems";
import SidebarItem from "./SidebarItem";
import React from "react";
import Line from "@/components/Line";

const SidebarItems = () => {
    console.log("sidebar items");
    
    return (
        <ul className="sidebar-items-con">
            {sidebarItems.map((item, index) => (
                <React.Fragment key={item.label}>
                    <SidebarItem
                        icon={item.icon}
                        label={item.label}
                        to={item.to}
                        children={item.children}
                    />
                    {index < sidebarItems.length - 1 && <Line />}
                </React.Fragment>
            ))}
        </ul>
    );
};

export default SidebarItems;
