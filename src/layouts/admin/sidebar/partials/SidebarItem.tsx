import useUIStore from "@/zustand/uiManagementStore";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { HiChevronDown } from "react-icons/hi";

import { NavLink, useLocation } from "react-router-dom";

export interface SidebarItemType {
    icon: IconType;
    label: string;
    to?: string;
    end?: string;
    children?: SidebarItemType[];
}

interface SidebarItemProps {
    icon: IconType;
    label: string;
    to: string;
    end?: boolean;
    children?: SidebarItemProps[];
    isChild?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    to,
    end = true,
    children,
    isChild = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const sidebarOpen = useUIStore((state) => state.sidebarOpen);
    const setSidebar = useUIStore((state) => state.setSidebar);

    const isChildActive = children?.some((child) => {
        return location.pathname.endsWith(child.to);
    });

    useEffect(() => {
        if (!sidebarOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsOpen(false);
        }
    }, [sidebarOpen]);
    const handleSidebarClick = () => {
        if (!sidebarOpen) {
            setSidebar(true);
        }
    };
    console.log("sidebar item");
    if (children && children.length > 0) {
        return (
            <div className="submenu-parent  " onClick={handleSidebarClick}>
                <button
                    className={`submenu-btn ${isChildActive ? "text-blue-500" : "bg-white/0"}`}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <div className="flex w-full  gap-4 px-5">
                        <Icon size={24} />
                        <span className="font-bold">{label}</span>
                    </div>
                    <HiChevronDown
                        size={20}
                        className={` ml-2 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    />
                </button>

                <div
                    className={`submenu-items-con   ${isOpen ? "max-h-100" : "max-h-0"} `}
                    style={{}}
                >
                    {children.map((child, index) => (
                        <div
                            key={child.label}
                            className="transition-all"
                            style={{
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen
                                    ? "translateX(0)"
                                    : "translateX(20px)",
                                transitionDelay: isOpen
                                    ? `${index * 70}ms`
                                    : "0ms",
                                transitionProperty: "opacity, transform",
                            }}
                        >
                            <SidebarItem
                                label={child.label}
                                icon={child.icon}
                                to={child.to || "#"}
                                end={child.end}
                                isChild={true}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <NavLink to={to} end={end}>
            {({ isActive }) => (
                <li className={`sidebar-item`}>
                    <div
                        className={`sidebar-item-info ${isActive && "bg-primary/10"} ${isChild && "pr-10"} `}
                    >
                        <Icon
                            size={22}
                            color={isActive ? "var(--color-primary )" : null}
                            className="duration-200"
                        />
                        <span className="font-bold">{label}</span>
                    </div>
                    <div
                        className={`active-indicator ${isActive ? "opacity-100" : "opacity-0"} `}
                    ></div>
                </li>
            )}
        </NavLink>
    );
};

export default SidebarItem;
