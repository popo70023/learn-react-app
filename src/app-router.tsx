import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import ChartMenu from "./components/ChartMenu/ChartMenu";

const AppRoutes: React.FC = () => (
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Payments/*" element={<ChartMenu/>} />
               
        <Route path="/Customers" element={<HomePage />} />
        </Routes>
);

export default AppRoutes;
