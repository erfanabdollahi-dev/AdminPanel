import {
    HiChartBar,
    HiClipboardList,
    HiCog,
    HiColorSwatch,
    HiCube,
    HiPhotograph,
    HiShoppingBag,
    HiTag,
    HiUserGroup,
} from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";

export const sidebarItems = [
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
