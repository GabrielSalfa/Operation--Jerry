import React from 'react';
import './style.css';

function IngresoSin() {
    return (
        <div>
            <header>
                <div className="menu">
                    <a href="#Inicio" className="inactivo">Inicio</a>
                    <span style={{ marginLeft: '20px' }}></span>
                    <a href="#Ingreso de usuario" className="inactivo">Ingreso de usuario</a>
                    <span style={{ marginLeft: '20px' }}></span>
                    <a href="#Consulta de siniestros" className="inactivo">Consulta de siniestros</a>
                </div>
                <h1>
                    <center>
                        INGRESO DE SINIESTRO
                    </center>
                </h1>
                <br />
            </header>
            <br />
            <br />

            <div className="form-group">
                <center>
                    <label htmlFor="policyNumber">Número de Póliza:</label>
                    <input
                        type="text"
                        id="policyNumber"
                        name="policyNumber"
                        required
                    />
                </center>
                <br />
            </div>
            <center>
                <table border="1">
                    <tr>
                        <p>
                            COPIA DIGITAL DE LA CONSTANCIA DE DENUNCIA O PARTE DENUNCIA (PDF)
                        </p>
                    </tr>
                    <tr>
                        <td>
                            <input type="file" name="enviar" accept={"application/pdf"} />
                        </td>
                        <td>
                            <input type="reset" name="borrar" value="LIMPIAR" />
                        </td>
                    </tr>
                </table>
            </center>
            <br />
            <center>
                <table border="1">
                    <tr>
                        <p>
                            COPIA DE LICENCIA DE CONDUCIR (JPG O JPEG)
                        </p>
                    </tr>
                    <tr>
                        <td>
                            <input type="file" name="enviar" accept="application/pdf" />
                        </td>
                        <td>
                            <input type="reset" name="borrar" value="LIMPIAR" />
                        </td>
                    </tr>
                </table>
            </center>
            <br />
            <br />

            <center>
                <button id="boton1">
                    Ingresar siniestro
                </button>
            </center>
            <br />
            <br />
            <br />
            <img src="../../../../../../../../../Downloads/Ingreso%20de%20siniestro/icono-siniestro.png" width="50" height="50" />
            <br />
            <br />
            <footer>
                <center>
                    <h5>Página ingreso de siniestro 1.0</h5><br />
                </center>
            </footer>
        </div>
    );
}

export default IngresoSin;