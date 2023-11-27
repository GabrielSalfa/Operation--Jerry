import React from "react";
import { Link } from "react-router-dom";


const AdminNavBar = () => {
    return (
        <div>
            <body>
                <nav>
                    <ul>
                        <li>
                            <Link to="crear-usuario">Crear usuario</Link>
                        </li>
                        <li>
                            <Link to="administrar-usuarios">Administrar usuarios</Link>
                        </li>
                        <li>
                            <Link to="administrar-siniestros">Administrar siniestros</Link>
                        </li>
                    </ul>
                </nav>
            </body>
        </div>
    )
};

export default AdminNavBar;