import { BrowserRouter } from "react-router";
import AdminLayout from "./layouts/admin/AdminLayout";
import useUIStore from "./zustand/uiManagementStore";
function App() {

  const theme = useUIStore((state) => state.theme);


  return (
    <BrowserRouter>
      <div className={`${theme}`}>
        <AdminLayout />
      </div>
    </BrowserRouter>
  );
}

export default App;
