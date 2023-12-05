import React from 'react';
import Slider from './MaximumSlider'; // Importa el componente Slider
import './diseñoIni.css'; // Asegúrate de que este es tu archivo CSS para Inicio

const Inicio = () => {
    // Puedes definir tus imágenes aquí o traerlas de props o un contexto si es necesario
    const images = [
        'https://www.milapuntocom.com/wp-content/uploads/2017/12/large-64.jpg',
        'https://www.eleconomista.com.mx/__export/1522807288195/sites/eleconomista/img/2018/04/03/fp_princi_aseguradora_040418.png_1902800913.png',
        'https://i0.wp.com/chocale.cl/wp-content/uploads/2022/03/copia-poliza-soap.jpg?resize=800%2C500&ssl=1'
    ];

    return (
        <div className='Contenedor'>
            <h1 className = 'Titular'>Bienvenido a nuestro Sistema de Siniestros</h1>
            <Slider images={images} /> {/* Aquí se utiliza el componente Slider */}
            <h2>Sobre Nuestro Equipo</h2>
            <article>
                <img src="https://i.ytimg.com/vi/JvOGANs3hYI/oar2.jpg" alt="" />
                <p>Integrante 1</p>
                <p>Aqui pueden ir iconos de redes sociales como Linkedin o GitHub</p>
            </article>
            <article>
                <img src="" alt="" />
                <p>Integrante 2</p>
                <p>Aqui pueden ir iconos de redes sociales como Linkedin o GitHub</p>
            </article>
            <article>
                <img src="" alt="" />
                <p>Integrante 3</p>
                <p>Aqui pueden ir iconos de redes sociales como Linkedin o GitHub</p>
            </article>
            <article>
                <img src="" alt="" />
                <p>Integrante 4</p>
                <p>Aqui pueden ir iconos de redes sociales como Linkedin o GitHub</p>
            </article>

        </div>
    );
};

export default Inicio;