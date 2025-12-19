import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import HomeDashboard from "../pages/HomeDashboard";
import GestionGuardias from "../pages/GestionGuardias";
import CalculosDocumentos from "../pages/CalculosDocumentos";
import AppLayout from "../layout/AppLayout";

function isAuthed() {
    return localStorage.getItem("auth") === "1";
}

function ProtectedRoute({ children }) {
    if (!isAuthed()) return <Navigate to="/login" replace />;
    return children;
}

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />

            <Route path="/login" element={<Login />} />

            {/* Layout + rutas protegidas */}
            <Route
                element={
                    <ProtectedRoute>
                        <AppLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="/home" element={<HomeDashboard />} />
                <Route path="/guardias" element={<GestionGuardias />} />
                <Route path="/calculos" element={<CalculosDocumentos />} />
            </Route>

            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    );
}