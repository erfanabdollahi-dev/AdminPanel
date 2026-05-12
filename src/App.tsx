import { BrowserRouter } from "react-router";
import AdminLayout from "./layouts/admin/AdminLayout";
import AppThemeWrapper from "./wrapper/AppThemeWrapper";
function App() {
    return (
        <BrowserRouter>
            <AppThemeWrapper>
                <AdminLayout />
            </AppThemeWrapper>
        </BrowserRouter>
    );
}

export default App;
