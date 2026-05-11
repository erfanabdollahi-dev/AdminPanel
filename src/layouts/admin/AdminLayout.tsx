import useUIStore from "@/zustand/uiManagementStore";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
const AdminLayout = () => {
  const sidebarOpen = useUIStore((state) => state.sidebarOpen);

  return (
    <div
      className="admin-layout"
      style={{
        gridTemplateColumns: !sidebarOpen ? "80px 1fr" : "250px 1fr",
        // Or whichever sizes you want: closed=80px, open=250px
      }}
    >
      <Sidebar />
      <Header />
      <main className="al-content">
        <p>11</p>
        {/* <div className="min-h-[200vh] w-20 bg-gray-50"></div> */}
      </main>
    </div>
  );
};

export default AdminLayout;
