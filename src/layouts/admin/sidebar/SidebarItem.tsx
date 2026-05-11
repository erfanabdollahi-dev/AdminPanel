import { useState } from "react";
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

  const isChildActive = children?.some((child) => {
    return location.pathname.endsWith(child.to);
  });

  if (children && children.length > 0) {
    return (
      <div className="submenu-parent w-full">
        <button
          className={`submenu-btn h-14 items-center outline-0 w-full flex ${isChildActive ? "bg-white/20" : "bg-white/0"}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex w-full  gap-4 px-5">
            <Icon size={22} />
            <span className="font-bold">{label}</span>
          </div>
          <HiChevronDown
            size={20}
            className={` ml-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`submenu-items-con overflow-hidden   duration-300  ${isOpen ? "max-h-100" : "max-h-0"} pr-9`}
          style={{}}
        >
          {children.map((child, index) => (
            <div
              key={child.label}
              className="transition-all"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(20px)",
                transitionDelay: isOpen ? `${index * 60}ms` : "0ms",
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
        <li
          className={`sidebar-item overflow-hidden relative w-full h-14  ${isActive} flex  items-center gap-3`}
        >
          <div className={`flex w-full pr-5 gap-4 `}>
            <Icon size={22} />
            <span className="font-bold">{label}</span>
          </div>
          {isActive && <ActiveIndicator />}
        </li>
      )}
    </NavLink>
  );
};

export default SidebarItem;

const ActiveIndicator = () => {
  return (
    // <div className="sidebar-item-active-con absolute w-full h-full flex  ">
    //   <div className=" bg-primary w-6 rounded-l-full"></div>
    //   <div className=" w-12 top-0 -translate-y-5  h-12 bg-unit-bg-d rounded-full absolute"></div>
    //   <div className=" w-12 bottom-0 translate-y-5 h-12 bg-unit-bg-d rounded-full absolute"></div>
    // </div>

    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2/3 bg-primary rounded-full"></div>
  );
};
