import React from 'react';
import { Form, Field, Formik } from 'formik';
import { useNavigate } from 'react-router-dom'; 
import './Aute.css';

const Aute = () => {
    const navigate = useNavigate();

    const handleSubmitAdministrador = (values) => {
        fetch('http://localhost:9000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.adminUsername,
                password: values.adminPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                alert(`Bienvenido administrador, ${values.adminUsername} :D`);
                // Guardar token en el almacenamiento local o en el estado global
                localStorage.setItem('token', data.token);
                navigate('/VistaAdmin/crear-usuario');
            } else {
                alert('Inicio de sesión fallido.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return ( 
        <div className="BodyAute">
            <Formik initialValues={{ Username: '', Password: '' }} onSubmit={handleSubmitAdministrador}>
                {() => (
                    <Form className="formularioAute" autocomplete="off">
                        <h1 className="Encabezado">Ingreso usuarios</h1>                      
                        <fieldset>
                            <div className="campos">
                                <Field className="casillas" type="text" name="username" placeholder="Nombre de Usuario" required />
                            </div>
                            <div className="campos">
                                <Field className="casillas" type="password" name="password" placeholder="Contraseña" required />
                            </div>
                        </fieldset>
                        <button type="submit" className="btn">
                            Ingresar
                        </button>
                    </Form>
                )}
            </Formik>
            <footer>
                <p>Todos los derechos reservados 2023.</p>
            </footer>
        </div>
    );
}
export default Aute;