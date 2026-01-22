import { useMemo, useState } from "react";
import "../styles/GestionGuardias.css";

export default function GestionGuardias() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock data (luego lo conectas a tu backend o JSON)
  const dateLabel = "Lunes, 15 de abril 2024";

  const jefe = useMemo(
    () => ({
      nombre: "Dr. Ana Sánchez",
      info: "Medicina Interna • Ext. 2414",
      tipo: "Presencia Física",
      hora: "15:00 - 08:00",
      iniciales: "AS",
    }),
    []
  );

  const grupos = useMemo(
    () => [
      {
        especialidad: "Cirugía General",
        count: 2,
        items: [
          {
            iniciales: "DC",
            nombre: "Dra. Coaaa Ruiz",
            rol: "Adjunto",
            tipoCode: "PF",
            tipoClass: "tagPF",
            hora: "16:00 - 20:00",
          },
          {
            iniciales: "BL",
            nombre: "Dra. Beatriz López",
            rol: "Residente R3",
            tipoCode: "PF",
            tipoClass: "tagPF",
            hora: "20:00 - 08:00",
          },
        ],
      },
      {
        especialidad: "Traumatología",
        count: 1,
        items: [
          {
            iniciales: "JG",
            nombre: "Dr. Juan Gómez",
            rol: "Adjunto",
            tipoCode: "LOC",
            tipoClass: "tagLOC",
            hora: "15:00 - 08:00",
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="ggPage">
      {/* HEADER */}
      <header className="ggHeader">
        <div className="ggTopbar">
          <div className="ggBrand">


            <div className="ggBrandText">
              <div className="cdOverline">Junta de Andalucía</div>
              <div className="cdTitle">Gestión de Guardias</div>
            </div>
          </div>

          <div className="ggTopbarRight">
            <button className="iconBtn" aria-label="Notificaciones">
              <span className="material-icons">notifications</span>
            </button>
            <div className="ggAvatar" aria-label="Usuario JP">
              JP
            </div>
          </div>
        </div>

        <div className="ggDatebar">
          <button className="pillBtn" aria-label="Día anterior">
            <span className="material-icons">chevron_left</span>
          </button>

          <div className="ggDateLabel">
            <span className="material-icons">calendar_today</span>
            <span>{dateLabel}</span>
          </div>

          <button className="pillBtn" aria-label="Día siguiente">
            <span className="material-icons">chevron_right</span>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="ggMain">
        {/* KPIs */}
        <div className="kpiGrid">
          <div className="kpiCard">
            <div className="kpiIcon kpiWarn">
              <span className="material-icons">pending_actions</span>
            </div>
            <div className="kpiNumber">3</div>
            <div className="kpiLabel">Pendientes</div>
          </div>

          <div className="kpiCard">
            <div className="kpiIcon kpiInfo">
              <span className="material-icons">groups</span>
            </div>
            <div className="kpiNumber">12</div>
            <div className="kpiLabel">Total Guardias</div>
          </div>
        </div>

        {/* Jefe de guardia */}
        <section className="panel">
          <div className="panelHead">
            <h3 className="panelTitle">Jefe de Guardia Global</h3>
            <button className="panelAction" type="button">
              <span className="material-icons">edit</span>
              Cambiar
            </button>
          </div>

          <div className="panelBody">
            <div className="jefeAvatar">
              <div className="jefePhoto" aria-hidden="true">
                {jefe.iniciales}
              </div>
              <div className="jefeOnline" aria-hidden="true" />
            </div>

            <div className="jefeInfo">
              <div className="jefeName">{jefe.nombre}</div>
              <div className="jefeMeta">{jefe.info}</div>
              <div className="jefeBadges">
                <span className="badgeType">{jefe.tipo}</span>
                <span className="badgeTime">{jefe.hora}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Guardias del día */}
        <div className="sectionHead">
          <h2 className="sectionTitle">Guardias del Día</h2>
          <button className="iconBtn gray" aria-label="Filtrar">
            <span className="material-icons">filter_list</span>
          </button>
        </div>

        <div className="groupStack">
          {grupos.map((g) => (
            <section className="groupCard" key={g.especialidad}>
              <div className="groupHead">
                <span className="groupTitle">{g.especialidad}</span>
                <span className="groupCount">{g.count}</span>
              </div>

              <div className="groupList">
                {g.items.map((it, idx) => (
                  <div className="rowItem" key={it.nombre + idx}>
                    <div className="rowAvatar">{it.iniciales}</div>

                    <div className="rowMain">
                      <div className="rowTop">
                        <div className="rowName">{it.nombre}</div>
                        <span className={`tag ${it.tipoClass}`}>{it.tipoCode}</span>
                      </div>
                      <div className="rowBottom">
                        <div className="rowRole">{it.rol}</div>
                        <div className="rowTime">{it.hora}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="ctaWrap">
          <button className="ctaBtn" type="button" onClick={() => setIsModalOpen(true)}>
            <span className="material-icons">add_circle_outline</span>
            <span>Asignar jefe manualmente</span>
          </button>
        </div>
      </main>

      {/* NAV bottom (si luego lo quieres quitar en desktop, lo adaptamos con media queries) */}
      <nav className="bottomNav" aria-label="Navegación inferior">
        <a className="navItem active" href="#">
          <span className="material-icons">calendar_month</span>
          <span>Guardias</span>
        </a>
        <a className="navItem" href="#">
          <span className="material-icons">calculate</span>
          <span>Cálculos</span>
        </a>
        <a className="navItem" href="#">
          <span className="material-icons">description</span>
          <span>Informes</span>
        </a>
        <a className="navItem" href="#">
          <span className="material-icons">settings</span>
          <span>Ajustes</span>
        </a>
      </nav>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modalOverlay" role="dialog" aria-modal="true" aria-label="Asignar Jefe de Guardia">
          <div className="modalSheet">
            <div className="modalBody">
              <div className="modalHeader">
                <div className="modalIcon">
                  <span className="material-icons">admin_panel_settings</span>
                </div>
                <div>
                  <div className="modalTitle">Asignar Jefe de Guardia</div>
                  <div className="modalSubtitle">Asignación manual con motivo y autorización.</div>
                </div>
              </div>

              <div className="formGrid">
                <label className="label">
                  Profesional
                  <select className="control">
                    <option>Seleccione un profesional...</option>
                    <option>Dr. Ana Sánchez</option>
                    <option>Dr. Juan Gómez</option>
                    <option>Dra. Beatriz López</option>
                  </select>
                </label>

                <label className="label">
                  Motivo del cambio
                  <textarea className="control" rows={3} placeholder="Especifique la razón del cambio manual..." />
                </label>

                <label className="label">
                  Código de autorización
                  <div className="codeField">
                    <span className="material-icons">lock</span>
                    <input className="codeInput" placeholder="0000" />
                    <span className="codeBadge">REQ</span>
                  </div>
                </label>
              </div>
            </div>
            

            <div className="modalFooter">
              <button className="btnPrimary" onClick={() => setIsModalOpen(false)} type="button">
                Confirmar
              </button>
              <button className="btnSecondary" onClick={() => setIsModalOpen(false)} type="button">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}