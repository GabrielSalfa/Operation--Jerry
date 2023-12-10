import React, { useState, useEffect } from 'react';
import { Form, Field, Formik } from 'formik';
import { useNavigate, Link } from 'react-router-dom'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Aute.css';

const Aute = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmitUsuario = (values) => {
        fetch('http://localhost:9000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.username,
                password: values.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                alert(`Bienvenido administrador, ${values.username} :D`);
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
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    return ( 
        <div className="BodyAute">
            <Formik initialValues={{ username: '', password: '' }} onSubmit={handleSubmitUsuario}>
                {() => (
                    <Form className="formularioAute" autocomplete="off">
                        <h1 className="Encabezado">Ingreso Personal</h1>                      
                            <div className="campos">
                                <Field className="casillas" type="text" name="username" placeholder="Nombre de Usuario" required />
                            </div>
                            <div className="campoPassword">
                                <Field className="casillas" type={showPassword ? "text" : "password"} name="password" placeholder="Contraseña" required />
                                <button type="button" onClick={togglePasswordVisibility} className="togglePassword">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        <button type="submit" className="btn">
                            Ingresar
                        </button>
                        <Link className='volver' to="/">Volver</Link>
                    </Form>
                )}
            </Formik>
            <p className="foooter">Todos los derechos reservados 2023.</p>
        </div>
    );
}
export default Aute;