import React from 'react';
import { Form, Field, Formik } from 'formik';
import { useNavigate } from 'react-router-dom'; 
import './Aute.css';

const Aute = () => {
    const navigate = useNavigate();

    const handleSubmitAdministrador = (values) => {
        alert(`Hemos capturado tus datos en el sistema. Bienvenido administrador, ${values.adminUsername} :D`);
        navigate('/VistaAdmin/crear-usuario');
    };

    const handleSubmitUsuario = (values) => {
        alert('Hemos capturado tus datos en el sistema. Bienvenido usuario :D');
    };

    return ( 
        <div className="BodyAute">
            <header>
                <h1 className="Encabezado">Ingreso Usuarios</h1>
            </header>
            <Formik initialValues={{ rut: '', poliza: '' }} onSubmit={handleSubmitUsuario}>
                {() => (
                    <Form className="formularioAute">
                        <p>Iniciar Sesión Usuarios</p>
                        <fieldset>
                            <div className="campos">
                                <i className="fa-solid fa-user-large"></i>
                                <Field className="casillas" type="number" name="rut" placeholder="Rut sin puntos ni guion" required />
                            </div>
                            <div className="campos">
                                <i className="fa-solid fa-hashtag"></i>
                                <Field className="casillas" type="text" name="poliza" placeholder="Número de Póliza" required />
                            </div>
                        </fieldset>
                        <button type="submit" className="btn">
                            Ingresar
                        </button>
                    </Form>
                )}
            </Formik>

            <Formik initialValues={{ adminUsername: '', adminPassword: '' }} onSubmit={handleSubmitAdministrador}>
                {() => (
                    <Form className="formularioAute">
                        <p>Ingreso administradores</p>
                        <fieldset>
                            <div className="campos">
                                <i className="fa-solid fa-user-large"></i>
                                <Field className="casillas" type="text" name="adminUsername" placeholder="Nombre de Usuario (Admin)" required />
                            </div>
                            <div className="campos">
                                <i className="fa-solid fa-lock"></i>
                                <Field className="casillas" type="password" name="adminPassword" placeholder="Contraseña (Admin)" required />
                            </div>
                        </fieldset>
                        <button type="submit" className="btn">
                            Ingresar como Administrador
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