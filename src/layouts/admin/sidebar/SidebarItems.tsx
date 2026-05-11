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
  HiClipboardList 
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
    <ul className="flex flex-col w-full text-white duration-300 h-full ">
      {sidebarItems.map((item) => (
        <SidebarItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          to={item.to}
          children={item.children}
        />
      ))}

      
    </ul>
  );
};

export default SidebarItems;