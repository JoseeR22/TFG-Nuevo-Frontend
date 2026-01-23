export default function Header(){


    const hideMenuButton = location.pathname === "/guardias";
    return(
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
                    <span className="material-icons-outlined">notificaciones</span>
                </button>
            </header>
    )
}