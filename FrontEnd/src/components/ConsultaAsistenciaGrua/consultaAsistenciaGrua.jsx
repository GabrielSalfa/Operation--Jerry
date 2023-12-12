import React, { useState } from 'react';
import './consultaAsistenciaGrua.css';
/* import { isAnalistaNegocio } from '../../../../BackEnd/src/middlewares/authJwt'; */

const ConsultaAsistenciaGrua = () => {
    /*
    const [showGlobalStats, setShowGlobalStats] = useState(false);
    const [numeroSiniestro, setNumeroSiniestro] = useState('');
    const [data, setData] = useState(null);
    
    const handleConsultasStuff = (values) => {
        if(isAnalistaNegocio) {
            alert(numeroSiniestro);
            const token = localStorage.getItem('token');
            fetch(`http://localhost:9000/api/gruas/${numeroSiniestro}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    setData(data);
                })
                .catch(error => {
                    alert("No se encontró el siniestro especificado.")
                });
        }
        else {

        }

    }
    */
    return (
        <div>
            <h1>Holas</h1>
        </div>
    )
}

export default ConsultaAsistenciaGrua;