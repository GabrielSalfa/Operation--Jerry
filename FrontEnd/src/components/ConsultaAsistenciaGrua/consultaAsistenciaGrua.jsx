import React, { useState } from 'react';
import './consultaAsistenciaGrua.css';
import { mostrarContenido } from './consultaAsistenciaGruaBack';

/*
const ConsultaAsistenciaGrua = () => {
    const navigate = useNavigate();

    const handleConsultasStuff = (values) => {
        fetch(`http://localhost:9000/api/gruas/${numero_siniestro}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                Separar info
                Meter info en espacios correspondientes (A lo mejor hay que reestructurar en más componentes...
            })
            .catch(error => {
                console.log("No se encontró el siniestro especificado.")
            });
    }
}

*/

function ConsultaAsistenciaGrua() {
    const [showGlobalStats, setShowGlobalStats] = useState(false);

    return (
        <div>
            {/* Barra de navegación */}
            <div className="utility">
                <nav className="Nav-Principal contenedor">
                    <a href="#">Inicio</a>
                    <a href="#">Sobre Mi</a>
                    <a href="#">Clientes</a>
                    <a href="#">Contacto</a>
                </nav>
            </div>
            {/* Más cositas */}
            <div className="Informacion-Consulta-Asistencia">
                {/* Este botón tiene modificaciones adicionales para cambiar el tamaño */}
                <button className="Cool-Button Datos-Consulta-Asistencia" style={{ width: 100, fontSize: '10px', padding: '0.3rem', display: 'flex', alignItems: 'center' }}>
                    <img className="Icono" src="https://cdn-icons-png.flaticon.com/512/3545/3545435.png" alt="Volver" />
                    Volver
                </button>
                <h3 className="Datos-Consulta-Asistencia">Revisando siniestro: </h3>
                <h3 className="Datos-Consulta-Asistencia" id="numero-siniestro">
                    123456
                </h3>
            </div>

            {/* Visualización de los datos */}
            <table className="Visualizacion-Datos-Grua">
                <thead>
                <tr>
                    <td>
                        <h2>Asistido por:</h2>
                    </td>
                    <td>
                        <h2 id="grua-nombre">Grúas pulentas</h2>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Patente:</td>
                    <td id="grua-patente">RKZB98</td>
                </tr>
                <tr>
                    <td>Chofer:</td>
                    <td id="grua-chofer">Johnny Camiones</td>
                </tr>
                <tr>
                    <td>Punto de retiro</td>
                    <td id="grua-retiro">Tocopilla 222</td>
                </tr>
                <tr>
                    <td>Punto de destino</td>
                    <td id="grua-destino">Taller los pulentos</td>
                </tr>
                </tbody>
            </table>
            {/* Estadísticas globales */}
            <div className="Visualizacion-Datos-Grua">
                <button className="Cool-Button" onClick={() => setShowGlobalStats(!showGlobalStats)}>
                    Estadísticas Globales
                </button>

                {showGlobalStats && (
                    <div id="Estadisticas-Globales">
                        <h2>Vehículos más asistidos</h2>
                        <table>
                            <tr>
                                <td>
                                    <p id="estadisticas-marca-mas-asistida">Audi</p>
                                    <p id="estadisticas-modelo-mas-asistido">Honda Civic</p>
                                </td>
                                <td>
                                    <p id="estadisticas-porcentaje-marca">67%</p>
                                    <p id="estadisticas-porcentaje-modelo">54%</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ConsultaAsistenciaGrua;