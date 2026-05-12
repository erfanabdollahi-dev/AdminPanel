import useUIStore from "@/zustand/uiManagementStore";

const AppThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    const theme = useUIStore((state) => state.theme);
    return <div className={`${theme}`}>{children}</div>;
};

export default AppThemeWrapper;
