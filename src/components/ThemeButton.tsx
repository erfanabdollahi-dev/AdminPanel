import useUIStore from "@/zustand/uiManagementStore";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeButton = () => {
    const toggleTheme = useUIStore((state) => state.toggleTheme);
    const theme = useUIStore((state) => state.theme);

    return (
        <div className="h-full flex items-center justify-center">
            <button
                onClick={() => toggleTheme()}
                className={`${theme === "dark" ? "rotate-90" : "rotate-0"} outline-0 duration-400`}
            >
                {theme === "light" ? (
                    <MdDarkMode size={30} />
                ) : (
                    <MdLightMode size={30} />
                )}
            </button>
        </div>
    );
};

export default ThemeButton;
