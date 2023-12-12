import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Sini.css'; 

const ConsultarSiniestrosForm = () => {
    const [accidents, setAccidents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmitConsultaSiniestros = async (values, actions) => {
        setIsLoading(true);
        setError('');
      
        try {
          // Aquí realizas la solicitud al servidor con los parámetros deseados
          const response = await axios.get(`http://localhost:9000/api/accidents?rut=${values.rut}&policyNumber=${values.numeroPoliza}`);
      
          // Estableces los siniestros obtenidos en el estado para mostrarlos
          setAccidents(response.data);
        } catch (error) {
          // Manejas cualquier error que pueda ocurrir durante la solicitud
          setError('Error al consultar siniestros.');
        } finally {
          setIsLoading(false);
        }
      };
    
    return (
        <div className="ContenedorSiniestro">
            <div className="pendiente">
                <Formik
                    initialValues={{ rut: '', numeroPoliza: '' }}
                    onSubmit={(values, actions) => {
                        handleSubmitConsultaSiniestros(values, actions);
                        actions.setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form autoComplete='off'>
                            <h1 className='TituloSiniestro'>Consultar Siniestro</h1>
                            <label htmlFor="rut" className="Label">RUT Propietario:</label>
                            <Field name="rut" type="text" placeholder="Ingrese su RUT" className="Input" />
                            <label htmlFor="numeroPoliza" className="Label">Número de Póliza:</label>
                            <Field name="numeroPoliza" type="text" placeholder="Número de póliza" className="Input" />
                            <div className='FormContainer'>
                                <button className='botonbello' type="submit" disabled={isSubmitting}>
                                    Consultar
                                </button>
                            </div>
                            <Link className='volver' to="/">Volver</Link>
                        </Form>
                    )}
                </Formik>
                {isLoading && <p className="Cargando">Cargando...</p>}
                {error && <p className="error">{error}</p>}
                {accidents.length > 0 ? (
                    <div>
                        <h2 className='TituloResultados'>Resultados:</h2>
                        {accidents.map((accident, index) => (
                            <div className='MapeoAccident' key={index}>
                                <p className='pResultados'>RUT Propietario: {accident.rutOwner}</p>
                                <p className='pResultados'>Número de Póliza: {accident.policyNumber}</p>
                                <p className='pResultados'>Nombre del Liquidador: {accident.liquidator_name}</p>
                                <p className='pResultados'>Fecha del Siniestro: {new Date(accident.date).toLocaleDateString()}</p>
                                <p className='pResultados'>Taller Asignado: {accident.workshop_assign}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    !isLoading && <p className='NoResultados'>No se encontraron resultados.</p>
                )}
            </div>
        </div>
    );
};

export default ConsultarSiniestrosForm;