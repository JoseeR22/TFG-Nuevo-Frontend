import "./style/Footer.css";

export default function Footer({
    year = new Date().getFullYear(),
    org = "Empresa colaboradora con la Junta de Andalucía",
    links = [
        { label: "Aviso Legal", href: "#" },
        { label: "Privacidad", href: "#" },
    ],
}) {
    return (
        <footer className="loginFooter">
            <p>© {year} {org}. Todos los derechos reservados.</p>

            <div className="footerLinks">
                {links.map((l) => (
                    <a key={l.label} href={l.href}>
                        {l.label}
                    </a>
                ))}
            </div>
        </footer>
    );
}
