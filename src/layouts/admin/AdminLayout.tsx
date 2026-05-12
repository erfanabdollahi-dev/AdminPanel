import useUIStore from "@/zustand/uiManagementStore";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
const AdminLayout = () => {
    console.log("safa");

    return (
        <AdminLayoutContainer>
            <Header />
            <Sidebar />
            <main className="al-content">
                <p>11</p>
                {/* <div className="min-h-[200vh] w-20 bg-gray-50"></div> */}
            </main>
        </AdminLayoutContainer>
    );
};

export default AdminLayout;

const AdminLayoutContainer = ({ children }: { children: React.ReactNode }) => {
    const sidebarOpen = useUIStore((state) => state.sidebarOpen);

    return (
        <div
            className={`admin-layout ${!sidebarOpen ? "sidebar-closed" : "sidebar-open"}`}
        >
            {children}
        </div>
    );
};
