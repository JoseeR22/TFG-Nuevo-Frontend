import { useMemo, useState } from "react";
import "../components/style/Header.css";

function getInitials(name = "") {
    const clean = name.trim();
    if (!clean) return "";
    const parts = clean.split(/\s+/).filter(Boolean);
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
}

export default function Header({ onMenuClick, user, onLogout, onProfile }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const displayName = user?.name ?? "Usuario";
    const avatarUrl = user?.avatarUrl ?? "";
    const initials = useMemo(() => getInitials(displayName), [displayName]);

    return (
        <header className="cdHeader">
            <div className="cdHeaderInner">
                {/* IZQUIERDA: hamburguesa SOLO móvil */}
                <div className="cdHeaderLeft">
                    <button
                        className="cdIconBtn cdMenuBtn"
                        type="button"
                        aria-label="Abrir menú"
                        onClick={onMenuClick}
                    >
                        <span className="material-icons-outlined">menu</span>
                    </button>
                </div>

                {/* CENTRO */}
                <div className="cdBrand cdBrandCenter">
                    <svg className="cdLogo" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2L2 22h20L12 2zm0 3.8L18.4 20H5.6L12 5.8z" />
                    </svg>
                    <span>GuardiApp</span>
                </div>

                {/* DERECHA */}
                <div className="cdHeaderRight">
                    <button className="cdIconBtn cdNotifBtn" aria-label="Notificaciones" type="button">
                        <span className="material-icons-outlined">notifications</span>
                    </button>

                    <div className="cdAvatarWrap">
                        <button
                            className="cdAvatarBtn"
                            type="button"
                            aria-label="Abrir perfil"
                            aria-haspopup="menu"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((v) => !v)}
                        >
                            {avatarUrl ? (
                                <img className="cdAvatarImg" src={avatarUrl} alt={`Foto de ${displayName}`} />
                            ) : initials ? (
                                <span className="cdAvatarInitials">{initials}</span>
                            ) : (
                                <span className="material-icons-outlined cdAvatarPersonIcon">person</span>
                            )}
                        </button>

                        {menuOpen && (
                            <>
                                <div className="cdMenuOverlay" onClick={() => setMenuOpen(false)} />
                                <div className="cdMenu" role="menu">
                                    <div className="cdMenuHeader">
                                        <div className="cdMenuName">{displayName}</div>
                                        {user?.email && <div className="cdMenuEmail">{user.email}</div>}
                                    </div>

                                    <button
                                        className="cdMenuItem"
                                        type="button"
                                        role="menuitem"
                                        onClick={() => {
                                            setMenuOpen(false);
                                            onProfile?.();
                                        }}
                                    >
                                        <span className="material-icons-outlined">account_circle</span>
                                        Perfil
                                    </button>

                                    <button
                                        className="cdMenuItem"
                                        type="button"
                                        role="menuitem"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <span className="material-icons-outlined">settings</span>
                                        Ajustes
                                    </button>

                                    <div className="cdMenuDivider" />

                                    <button
                                        className="cdMenuItem danger"
                                        type="button"
                                        role="menuitem"
                                        onClick={() => {
                                            setMenuOpen(false);
                                            onLogout?.();
                                        }}
                                    >
                                        <span className="material-icons-outlined">logout</span>
                                        Cerrar sesión
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}