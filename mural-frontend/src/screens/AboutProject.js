import React, { useEffect, useState } from 'react';
import '../styles/aboutProject.css';
import woman from '../assets/mujer_fuego.PNG';

const AboutProject = () => {
    useEffect(() => {}, []);
    let body =
        '<div style="width: 100%;"><div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;"><iframe title="Timeline mural" frameborder="0" width="1200px" height="675px" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://view.genial.ly/6605b3546df3a30015918cd9" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>';
    return (
        <div>
            <div className='containerTitle'>
                <b>Sobre el proyecto</b>
            </div>
            <div className='two-column-container'>
                <div className='left-column'>
                    <p>
                        El mural "Tejiendo Identidades, Celebrando nuestra
                        Interseccionalidad" surge como un testimonio vivo de los
                        principios fundamentales de la interseccionalidad, un
                        término acuñado por la jurista y académica Kimberlé
                        Crenshaw en 1989. Este concepto nos enseña que las
                        opresiones no existen de manera aislada, sino que se
                        entrecruzan y se potencian mutuamente: reconoce que la
                        experiencia de ser mujer no es uniforme; está
                        influenciada por nuestra raza, clase social, orientación
                        sexual, discapacidad y más.
                    </p>
                    <p>
                        Este mural, más que una expresión artística, es un
                        llamado a la reflexión y a la acción pues invita a
                        reconocer que la lucha feminista es más fuerte cuando es
                        inclusiva. Es un recordatorio visual de nuestro
                        compromiso con un feminismo interseccional, que busca no
                        solo la igualdad de género, sino la justicia social en
                        todas sus formas.
                    </p>
                    <p>
                        A través de cada trazo, este mural nos desafía a
                        desmantelar no solo el patriarcado, sino también el
                        racismo, el clasismo, el capitalismo y otras formas de
                        discriminación que afectan a mujeres e infancias en todo
                        el mundo, es una invitación a mirar más allá de las
                        diferencias superficiales y reconocer la belleza y la
                        fortaleza en la diversidad.
                    </p>
                    <p>
                        Que este mural nos inspire a seguir adelante en nuestra
                        lucha por un mundo más justo y equitativo para todos y
                        todas.
                    </p>
                </div>
                <div className='right-column'>
                    <img
                        className='img-woman'
                        src={woman}
                        alt='mujer de fuego'
                    />
                </div>
            </div>
            <div>
                <h2 className='containerTitle2'>Línea del tiempo</h2>
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
        </div>
    );
};

export default AboutProject;
