import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './diseñoModal.css';

const Modal = ({ empleado, cerrarModal, onSubmit, roles = [] }) => {
    // Definir el esquema de validación para el formulario
    const empleadoSchema = Yup.object().shape({
        username: Yup.string().required('El nombre de usuario es obligatorio'),
        password: Yup.string(),
        rol: Yup.string().required('El rol es obligatorio'),
    });
    //Queda pendiente darle estilo al Modal
    return (
        <div className="modal">
            <Formik
                initialValues={{
                    username: empleado.username || '',
                    password: '', // La contraseña inicialmente está vacía
                    rol: empleado.rol ? empleado.rol._id : ''
                }}
                validationSchema={empleadoSchema}
                onSubmit={(values, { setSubmitting }) => {
                    // Solo se envía la contraseña si el usuario ingresó una nueva
                    console.log("id del empleado",empleado._id);
                    const updateValues = {
                        username: values.username,
                        rol: values.rol,
                        ...(values.password && { password: values.password }),
                    };

                    // Llamada a la función onSubmit proporcionada por el componente padre
                    onSubmit(empleado._id, updateValues); 
                    setSubmitting(false);
                    cerrarModal(); // Cerrar el modal después de enviar el formulario
                }}
            >
                {({ errors, touched }) => (
                    <Form autoComplete='off'>
                        <h2 className='TituloModal'>Actualizar Empleado</h2>
                        <div className='DivModal'>
                            <Field name="username" type="text" placeholder="Nombre de Usuario" />
                            {errors.username && touched.username && <div>{errors.username}</div>}
                        </div>
                        <div className='DivModal'>
                            <Field name="password" type="password" placeholder="Nueva contraseña" />
                        </div>
                        <div className='DivModal'>
                            <label>Rol:</label>
                            {roles.map((rol) => (
                                <label key={rol._id}>
                                    <Field type="radio" name="rol" value={rol._id} checked={rol._id === empleado.rol?._id} />
                                    {rol.name}
                                </label>
                            ))}
                        </div>
                        <button className='BtnnModal'  type="submit">Actualizar</button>
                        <button  className='BtnnModal' type="button" onClick={cerrarModal}>Cancelar</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Modal;

  