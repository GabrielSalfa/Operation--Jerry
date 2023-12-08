import React from "react";
import './style.css';

const liquidador = () =>
{
    const handleLiquidador = (values) => {
        fetch('http://localhost:9000/api/accidents', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accident: values.accident,
                agency: values.agency,
                tow: values.tow,
                workshop: values.workshop,
                reptype: values.reptype,
                duration: values.duration,
                desc: values.desc,
                deliver: values.deliver,
                cost: values.cost
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    return(
        <div className="BodyLiqu">

            <center><h1 id="title1">Liquidador: Ernesto Jorquera</h1></center>
            <center><div id="cont">

                <label for="selectus">Siniestro:</label>
                <select id="selectus">
                    <option disabled selected>Seleccione el Siniestro</option>
                    <option value="E. Rigoberto 10/09">E. Rigoberto 10/09</option>
                    <option value="M. Fuenzalida 25/05">M. Fuenzalida 25/05</option>
                    <option value="P. Rodríguez 08/01">P. Rodríguez 08/01</option>
                    <option value="U. Saavedra 01/02">U. Saavedra 01/02</option>
                    <option value="J. José 30/12">J. José 30/12</option>
                </select>
                <button id="accsselect">
                    Seleccionar Siniestro
                </button>

            </div></center>

            <div id="sinadm">
                <div>
                    <center><h2>Gestión de Siniestro</h2></center>
                </div>

                <form>
                    <label for="agency">Agencia:</label>
                    <select id="selectagency">
                        <option disabled selected>Escoja una Agencia</option>
                        <option value="Reparaciones Rueda">Reparaciones Rueda</option>
                        <option value="Autofix">Autofix</option>
                        <option value="GasoBing">GasoBing</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label for="tow">Grúa:</label>
                    <input id="tow" type="text" name="tow"></input>
                    <label for="cworkshop">Taller:</label>
                    <input id="cworkshop" type="text" name="cworkshop"></input>
                    <br></br>
                    <br></br>
                    <label for="repairt">Tipo de Reparación:</label>
                    <select id="repairt">
                        <option disabled selected>Tipo de Reparación</option>
                        <option value="Menor">Menor</option>
                        <option value="Moderada">Moderada</option>
                        <option value="Completa">Completa</option>
                    </select>
                    <label for="time">Tiempo Estimado:</label>
                    <input id="time" type="text" name="time"></input>
                    <br></br>
                    <br></br>
                    <center>
                        <label for="desc">Descripción:</label>
                        <input id="desc" type="text" name="desc"></input>
                    </center>
                    <br></br>
                    <br></br>
                    <label for="day">Día de Entrega:</label>
                    <input id="day" type="text" name="day"></input>
                    <label for="cost">Monto Total:</label>
                    <input id="cost" type="text" name="cost"></input>
                    <br></br>
                    <br></br>
                    <center>
                        <button id="download">
                            Descargar PDF
                        </button>
                    </center>
                </form>
            </div><footer>
                <img src="unab.png" id="unab" alt="unab"></img>
                <img src="Logo Siniestro.png" id="logo" alt="logo"></img>
                <center><h3>Administración de Siniestro v0.5</h3></center>
            </footer>
        </div>
    )     
}
export default liquidador;