import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PaymentsPage from "./pages/PaymentsPage/PaymentsPage";

const AppRoutes: React.FC = () => (
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Payments" element={<PaymentsPage/>} >
            <Route path="All-transactions" element={<PaymentsPage/>} />
           </Route>
        <Route path="/Customers" element={<HomePage />} />
        </Routes>
);

export default AppRoutes;
