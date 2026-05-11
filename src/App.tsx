import { BrowserRouter } from "react-router";
import AdminLayout from "./layouts/admin/AdminLayout";
function App() {
  return (
    <BrowserRouter>
      <AdminLayout />
    </BrowserRouter>
  );
}

export default App;
