import React, { useEffect, useState } from 'react';
import '../styles/aboutProject.css';
import logo from '../assets/mural.jpeg';

const AboutProject = () => {
    useEffect(() => {}, []);
    let body =
        '<div class="container-wrapper-genially" style="position: relative; min-height: 400px; max-width: 100%;"><video class="loader-genially" autoplay="autoplay" loop="loop" playsinline="playsInline" muted="muted" style="position: absolute;top: 45%;left: 50%;transform: translate(-50%, -50%);width: 80px;height: 80px;margin-bottom: 10%"><source src="https://static.genial.ly/resources/loader-default.mp4" type="video/mp4" />Your browser does not support the video tag.</video><div id="6605b3546df3a30015918cd9" class="genially-embed" style="margin: 0px auto; position: relative; height: auto; width: 100%;"></div></div><script>(function (d) { var js, id = "genially-embed-js", ref = d.getElementsByTagName("script")[0]; if (d.getElementById(id)) { return; } js = d.createElement("script"); js.id = id; js.async = true; js.src = "https://view.genial.ly/static/embed/embed.js"; ref.parentNode.insertBefore(js, ref); }(document));</script>';
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
                <div className='right-column'>hola</div>
            </div>
            <div>
                <h2>Línea del tiempo</h2>
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
        </div>
    );
};

export default AboutProject;
