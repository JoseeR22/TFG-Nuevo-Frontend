import "../styles/PanelAdministracion.css";
import "../pages/PanelAdministracion.jsx";

export default function PanelAdministracion() {

    return (


        <div>
            < button className="hdBtn primary" type="button" onClick={() => openNewGuardiaModal()}>
                <span className="material-icons-outlined">add</span>
                <span className="hideOnMobile">Nueva Guardia</span>
                <span className="showOnMobile">Crear</span>
            </button >
        </div>


    );




}