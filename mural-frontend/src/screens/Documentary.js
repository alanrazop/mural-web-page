import React, { useEffect, useState } from 'react';
import '../styles/documentary.css';
import woman from '../assets/mujer_1.PNG';

const Documentary = () => {
    useEffect(() => {}, []);

    return (
        <div>
            <div className='containerTitle'>
                <h1>Documental</h1>
            </div>
            <div className='two-column-container'>
                <div className='left-column'>
                    <h3>
                        ¡Bienvenidos a esta sección dedicada al mini documental
                        que muestra el apasionante recorrido y proceso de
                        creación del mural "Tejiendo Identidades, Celebrando
                        nuestra Interseccionalidad"!
                    </h3>
                    <p>
                        Este documental es un viaje emocionante que nos lleva
                        desde la chispa inicial de inspiración hasta la
                        realización final de esta obra transformadora. Descubran
                        las historias detrás de cada pincelada, las emociones
                        que impulsaron a nuestras talentosas artistas y el
                        esfuerzo dedicado de nuestro equipo.
                    </p>
                    <p>
                        Sumérjanse en este viaje y descubran cómo el poder de la
                        interseccionalidad se entrelaza con cada línea y color,
                        creando un mensaje impactante de inclusión y justicia
                        social. Este mini documental es un tributo a la
                        creatividad, la colaboración y el compromiso de todos
                        los que participaron en este proyecto.
                    </p>
                    <p>
                        Esperamos que les inspire tanto como nos ha inspirado a
                        nosotros. <h3>¡Disfruten del recorrido!</h3>
                    </p>
                </div>
                <div className='right-column'>
                    <img
                        className='img-woman1'
                        src={woman}
                        alt='Mujer mirando hacia abajo'
                    />
                </div>
            </div>
        </div>
    );
};

export default Documentary;
