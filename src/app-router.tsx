import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const AppRoutes: React.FC = () => (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
);

export default AppRoutes;
