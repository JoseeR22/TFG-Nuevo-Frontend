import { useMemo, useState } from "react";
import "../styles/CalculosDocumentos.css";
// import Header from "../components/Header";
import "../styles/AppLayout.css";

export default function CalculosDocumentos() {
    const [profesional, setProfesional] = useState("Juan Gómez");
    const [mes, setMes] = useState("Abril 2024");

    // Mock: totales (luego lo calculas con tus datos reales)
const resumen = useMemo(
  () => ({
    horasTotales: 106,
    ca: "20h",
    pf: "22h",
    loc: "9h",
  }),
  []
);


    const daysHeader = ["L", "M", "X", "J", "V", "S", "D"];

    const calendarCells = useMemo(
        () => [
            { day: 29, off: true },
            { day: 30, off: true },
            { day: 31, off: true },

            { day: 1 },
            { day: 2, tag: "CA" },
            { day: 3, tag: "PF" },
            { day: 4 },

            { day: 5 },
            { day: 6, tag: "CA" },
            { day: 7 },
            { day: 8, tag: "LOC" },
            { day: 9 },
            { day: 10, tag: "CA" },
            { day: 11 },

            { day: 12 },
            { day: 13, tag: "PF" },
            { day: 14, tag: "CA" },
            { day: 15, tag: "CA", selected: true },
            { day: 16 },
            { day: 17 },
            { day: 18 },

            { day: 19 },
            { day: 20 },
            { day: 21, tag: "LOC" },
            { day: 22 },
            { day: 23, tag: "CA" },
            { day: 24 },
            { day: 25 },
        ],
        []
    );

    function downloadMock(name) {
        const blob = new Blob([`Mock file: ${name}`], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = name;
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <div className="cdPage">
           {/* <Header /> */}

            <main className="cdMain">
                {/* Selectores */}
                <div className="cdFilters">
                    <div className="cdSelectWrap">
                        <span className="material-icons cdSelectIcon">person</span>
                        <select
                            className="cdSelect"
                            value={profesional}
                            onChange={(e) => setProfesional(e.target.value)}
                            aria-label="Seleccionar profesional"
                        >
                            <option>Juan Gómez</option>
                            <option>Ana Sánchez</option>
                            <option>Pedro Martinez</option>
                        </select>
                        <span className="material-icons cdSelectChevron">expand_more</span>
                    </div>

                    <div className="cdSelectWrap">
                        <span className="material-icons cdSelectIcon">calendar_today</span>
                        <select
                            className="cdSelect"
                            value={mes}
                            onChange={(e) => setMes(e.target.value)}
                            aria-label="Seleccionar mes"
                        >
                            <option>Abril 2024</option>
                            <option>Marzo 2024</option>
                            <option>Febrero 2024</option>
                        </select>
                        <span className="material-icons cdSelectChevron">expand_more</span>
                    </div>
                </div>

                {/* Calendario */}
                <section className="cdCard">
                    <div className="cdCardHead">
                        <button className="cdIconBtn" aria-label="Mes anterior" type="button">
                            <span className="material-icons">chevron_left</span>
                        </button>

                        <h2 className="cdCardHeadTitle">{mes}</h2>

                        <button className="cdIconBtn" aria-label="Mes siguiente" type="button">
                            <span className="material-icons">chevron_right</span>
                        </button>
                    </div>

                    <div className="cdDow">
                        {daysHeader.map((d) => (
                            <div key={d}>{d}</div>
                        ))}
                    </div>

                    <div className="cdGrid" role="grid" aria-label="Calendario por profesional">
                        {calendarCells.map((c, idx) => (
                            <div
                                key={idx}
                                className={[
                                    "cdCell",
                                    c.off ? "off" : "",
                                    c.selected ? "selected" : "",
                                ].join(" ")}
                            >
                                <div className="cdDay">{c.day}</div>
                                {c.tag && (
                                    <div
                                        className={[
                                            "cdTag",
                                            c.tag === "CA" ? "ca" : "",
                                            c.tag === "PF" ? "pf" : "",
                                            c.tag === "LOC" ? "loc" : "",
                                        ].join(" ")}
                                    >
                                        {c.tag}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Resumen */}
                <section className="cdCard cdSummary">
                    <div className="cdSummaryTop">
                        <div>
                            <div className="cdMuted">Horas Totales</div>
                            <div className="cdHours">
                                <span className="cdHoursNum">{resumen.horasTotales}</span>
                                <span className="cdHoursUnit">horas</span>
                            </div>
                        </div>

                        <div className="cdSummaryIcon">
                            <span className="material-icons">access_time_filled</span>
                        </div>
                    </div>

                    <div className="cdBreakdown">
                        <div className="cdRow">
                            <div className="cdRowLeft">
                                <span className="dot ca" />
                                <span>CA (Continuidad)</span>
                            </div>
                            <div className="cdRowRight">{resumen.ca}</div>
                        </div>

                        <div className="cdRow">
                            <div className="cdRowLeft">
                                <span className="dot pf" />
                                <span>PF (Presencia Física)</span>
                            </div>
                            <div className="cdRowRight">{resumen.pf}</div>
                        </div>

                        <div className="cdRow">
                            <div className="cdRowLeft">
                                <span className="dot loc" />
                                <span>LOC (Localizada)</span>
                            </div>
                            <div className="cdRowRight">{resumen.loc}</div>
                        </div>
                    </div>
                </section>

                {/* Acciones */}
                <div className="cdActions">
                    <button
                        className="cdBtnSecondary"
                        type="button"
                        onClick={() => downloadMock("informe.pdf")}
                    >
                        <span className="material-icons">picture_as_pdf</span>
                        Descargar PDF
                    </button>

                    <div className="cdActionsGrid">
                        <button
                            className="cdBtnGhost"
                            type="button"
                            onClick={() => downloadMock("resumen.xlsx")}
                        >
                            <span className="material-icons excel">table_view</span>
                            Excel
                        </button>

                        <button
                            className="cdBtnGhost"
                            type="button"
                            onClick={() => alert("Mock: Enviado por correo")}
                        >
                            <span className="material-icons email">email</span>
                            Correo
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}