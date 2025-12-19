import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/AppLayout.css";


export default function AppLayout() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("auth");
        navigate("/login");
    }

    const location = useLocation();
    const hideMenuButton = location.pathname === "/guardias";

    return (
        <div className="appShell">
            {/* Topbar (móvil) */}
            <header className="appTopbar">
                {!hideMenuButton && (
                    <button className="appIconBtn" onClick={() => setOpen(true)} aria-label="Abrir menú">
                        <span className="material-icons-outlined">menu</span>
                    </button>
                )}

                <div className="appTopTitle">
                    <svg className="appLogo" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2L2 22h20L12 2zm0 3.8L18.4 20H5.6L12 5.8z"></path>
                    </svg>
                    <span>Junta de Andalucía</span>
                </div>

                <button className="appIconBtn" aria-label="Notificaciones">
                    <span className="material-icons-outlined">notifications</span>
                </button>
            </header>

            {/* Overlay (móvil) */}
            <div className={`appOverlay ${open ? "show" : ""}`} onClick={() => setOpen(false)} />

            {/* Sidebar */}
            <aside className={`appSidebar ${open ? "open" : ""}`}>
                <div className="appSidebarBrand">
                    <svg className="appSidebarLogo" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2L2 22h20L12 2zm0 3.8L18.4 20H5.6L12 5.8z"></path>
                    </svg>
                    <h1 className="appSidebarTitle">
                        Junta de <br /> Andalucía
                    </h1>

                    <button className="appIconBtn ghost closeOnlyMobile" onClick={() => setOpen(false)} aria-label="Cerrar menú">
                        <span className="material-icons-outlined">close</span>
                    </button>
                </div>

                <nav className="appNav">
                    <NavLink to="/home" className={({ isActive }) => `appNavItem ${isActive ? "active" : ""}`}>
                        <span className="material-icons-outlined">home</span>
                        <span>Inicio</span>
                    </NavLink>

                    <NavLink to="/guardias" className={({ isActive }) => `appNavItem ${isActive ? "active" : ""}`}>
                        <span className="material-icons-outlined">calendar_month</span>
                        <span>Gestión de Guardias</span>
                    </NavLink>

                    <NavLink to="/calculos" className={({ isActive }) => `appNavItem ${isActive ? "active" : ""}`}>
                        <span className="material-icons-outlined">calculate</span>
                        <span>Cálculos y Documentos</span>
                    </NavLink>

                    <div className="appNavDivider" />

                    <button className="appNavItem danger" onClick={logout} type="button">
                        <span className="material-icons-outlined">logout</span>
                        <span>Cerrar Sesión</span>
                    </button>
                </nav>

                <div className="appSidebarFooter">© 2025 SAS - Junta de Andalucía</div>
            </aside>

            {/* Contenido */}
            <main className="appMain" onClick={() => open && setOpen(false)}>
                <Outlet />
            </main>
        </div>
    );
}