import React, { useState } from 'react';
import './consultaAsistenciaGrua.css';

const ConsultaAsistenciaGrua = () => {
    const [showGlobalStats, setShowGlobalStats] = useState(false);
    const [numeroSiniestro, setNumeroSiniestro] = useState('');
    const [data, setData] = useState(null);

    const handleConsultasStuff = (values) => {
        fetch(`http://localhost:9000/api/gruas/${numeroSiniestro}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                alert("No se encontró el siniestro especificado.");
            });
    }

    return (
        <div className="container">
            {/* Barra de navegación */}
            <header className="header">
                <h1>
                    <center>CONSULTA ASISTENCIA GRUA</center>
                </h1>
                <br />
            </header>
            {/* Más cositas */}

            <div className="formContainer">
                <label>
                    Numero de Siniestro:
                    <input
                        type="text"
                        className="superInput"
                        value={numeroSiniestro}
                        onChange={(e) => setNumeroSiniestro(e.target.value)}
                    />
                </label>
                <button className="superButton" onClick={handleConsultasStuff}>
                    Fetch Data
                </button>
            </div>

            {/* Visualización de los datos */}
            {data &&
                <table className="dataTable">
                    <thead>
                    <tr>
                        <td>
                            <h2>Asistido por:</h2>
                        </td>
                        <td>
                            <h2 id="grua-nombre">{data.taller}</h2>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Patente:</td>
                        <td id="grua-patente">{data.patentG}</td>
                    </tr>
                    <tr>
                        <td>Chofer:</td>
                        <td id="grua-chofer">{data.chofer}</td>
                    </tr>
                    <tr>
                        <td>Punto de retiro</td>
                        <td id="grua-retiro">{data.punto_retiro}</td>
                    </tr>
                    <tr>
                        <td>Punto de destino</td>
                        <td id="grua-destino">{data.taller}</td>
                    </tr>
                    </tbody>
                </table>
            }
            <footer className='footer'></footer>
        </div>
    )
}

export default ConsultaAsistenciaGrua;