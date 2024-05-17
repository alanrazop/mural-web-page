import React, { useEffect, useState } from 'react';
import '../styles/aboutUs.css';
import jaguar from '../assets/Jaguar.PNG';

const AboutUs = () => {
    useEffect(() => {}, []);

    return (
        <div>
            <div className='containerTitle'>
                <b>Sobre nosotrxs</b>
            </div>
            <div className='two-column-container'>
                <div className='left-column'>
                    <img className='img-jaguar' src={jaguar} alt='jaguar' />
                </div>
                <div className='right-column'>
                    <p>
                        El grupo estudiantil Gender Watch se erige como un
                        bastión de valores centrados en el espectro del género.
                        En su esencia, este grupo reconoce la necesidad
                        primordial de cultivar el valor fundamental para crear
                        un ambiente sano y de confianza entre los participantes
                        y aquellos que son invitados a formar parte de sus
                        foros, conversatorios y actividades.
                    </p>
                    <p>
                        En Gender Watch, se abraza firmemente la convicción de
                        que la tolerancia y la apertura de mente son pilares
                        esenciales para el crecimiento humano. Buscamos
                        establecer una base sólida en la cosmovisión del grupo
                        con respecto a los derechos fundamentales de todas las
                        personas, sin distinción alguna. Con un firme compromiso
                        con el aprendizaje y la comprensión de las diversas
                        perspectivas, Gender Watch se posiciona como un agente
                        de cambio en la comunidad universitaria, trabajando
                        incansablemente para promover la igualdad y la inclusión
                        en todos los ámbitos.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
