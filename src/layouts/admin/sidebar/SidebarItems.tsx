// SidebarItems.tsx (unchanged, same as before)
import { RxDashboard } from "react-icons/rx";
import {
  HiShoppingBag,
  HiColorSwatch,
  HiTag,
  HiCube,
  HiUserGroup,
  HiChartBar,
  HiCog,
  HiPhotograph,
  HiClipboardList,
} from "react-icons/hi";
import SidebarItem from "./SidebarItem";

const SidebarItems = () => {
  const sidebarItems = [
    {
      icon: RxDashboard,
      label: "داشبورد",
      to: "dashboard",
    },
    {
      icon: HiShoppingBag,
      label: "محصولات",
      children: [
        {
          icon: HiColorSwatch,
          label: "رنگ‌ها",
          to: "products/colors",
        },
        {
          icon: HiTag,
          label: "برندها",
          to: "products/brands",
        },
        {
          icon: HiCube,
          label: "دسته‌بندی‌ها",
          to: "products/categories",
        },
        {
          icon: HiClipboardList,
          label: "همه محصولات",
          to: "products",
        },
      ],
    },
    {
      icon: HiUserGroup,
      label: "کاربران",
      children: [
        {
          icon: HiUserGroup,
          label: "مشتریان",
          to: "users/customers",
        },
        {
          icon: HiCog,
          label: "ادمین‌ها",
          to: "users/admins",
        },
      ],
    },
    {
      icon: HiPhotograph,
      label: "رسانه‌ها",
      children: [
        {
          icon: HiPhotograph,
          label: "گالری",
          to: "media/gallery",
        },
        {
          icon: HiChartBar,
          label: "آپلود جدید",
          to: "media/upload",
        },
      ],
    },
  ];

  return (
    <ul className="flex flex-col w-full text-white duration-300 h-full overflow-y-auto gap-2 ">
      {sidebarItems.map((item, index) => (
        <>
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            to={item.to}
            children={item.children}
          />
          {index < sidebarItems.length - 1 && (
            <div className="px-4 ">
              <div
                className="border-b border-dashed border-transparent w-full"
                style={{
                  borderImage:
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent) 1",
                }}
              ></div>
            </div>
          )}
        </>
      ))}
    </ul>
  );
};

export default SidebarItems;
