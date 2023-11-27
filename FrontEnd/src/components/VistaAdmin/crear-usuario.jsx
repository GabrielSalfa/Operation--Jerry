import React from 'react';
import { Form, Field, Formik } from 'formik';
import './crearusuario.css';

const CrearUsuario = () => {
  const handleSubmitCreacionUser = (values, formikBag) => {
    alert('Capturamos los datos del registro');
    formikBag.resetForm();
  };

  return (
    <div className="crear-usuario-container">
      <h1 className="titulo-creacion">Formulario de Registro</h1>
      <Formik initialValues={{ nombre: '', apellido: '', rut: '', email: '', telefono: '' }} onSubmit={handleSubmitCreacionUser}>
        <Form className="formulario-creacion">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <Field className="form-input" type="text" id="nombre" name="nombre" required />
          </div>

          <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <Field className="form-input" type="text" id="apellido" name="apellido" required />
          </div>

          <div className="form-group">
            <label htmlFor="rut">RUT:</label>
            <Field className="form-input" type="number" id="rut" name="rut" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <Field className="form-input" type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <Field className="form-input" type="tel" id="telefono" name="telefono" required />
          </div>

          <button type="submit" className="btn-admin">
            Crear
          </button>
        </Form>
      </Formik>
      <footer>
        <p>Todos los derechos reservados 2023.</p>
      </footer>
    </div>
  );
};

export default CrearUsuario;