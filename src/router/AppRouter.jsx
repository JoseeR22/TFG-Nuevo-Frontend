import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

import Login from "../pages/Login";
import HomeDashboard from "../pages/HomeDashboard";
import Guardias from "../pages/GestionGuardias";
import Calculos from "../pages/CalculosDocumentos";
import PanelAdmin from "../pages/PanelAdministracion";

export default function AppRouter() {
    return (
        <Routes>
            {/* Pública */}
            <Route path="/login" element={<Login />} />

            {/* ✅ Privadas con layout (Header + Sidebar) */}
            <Route element={<AppLayout />}>
                <Route path="/home" element={<HomeDashboard />} />
                <Route path="/guardias" element={<Guardias />} />
                <Route path="/calculos" element={<Calculos />} />
                <Route path="/panelAdmin" element={<PanelAdmin />} />
            </Route>

            {/* Default */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    );
}