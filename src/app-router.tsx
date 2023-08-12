import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PaymentsPage from "./pages/PaymentsPage/PaymentsPage";
import PaymentsList from "./components/PaymentsList/PaymentsList";
import ChartMenu from "./components/ChartMenu/ChartMenu";
import Api from "./pages/Api/Api";
const AppRoutes: React.FC = () => (
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Payments/*" element={<ChartMenu/>} />
               
        <Route path="/Customers" element={<HomePage />} />
        </Routes>
);

export default AppRoutes;
