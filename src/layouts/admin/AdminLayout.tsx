import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Header />
      <Sidebar />
      <main className="al-content">
        <div className="min-h-[200vh] w-20 bg-gray-50"></div>
      </main>
    </div>
  );
};

export default AdminLayout;
