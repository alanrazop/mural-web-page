import React, { useEffect } from 'react';
import '../styles/aknowlegements.css';
import hand from '../assets/Manos.PNG';

const Aknowledgements = () => {
    useEffect(() => {}, []);

    return (
        <div>
            <div className='containerTitle'>
                <b>Agradecimientos</b>
            </div>
            <div className='container-aknowledge'>
                <p>
                    Por darle vida a este proyecto que celebra y promueve la
                    interseccionalidad en la mujer, queremos expresar nuestro
                    sincero agradecimiento,
                </p>
                <p>
                    Al grupo estudiantil Gender Watch y todo su equipo: Melissa
                    Dorantes Martínez, Ximena Santos Huerta, Ma. Ángeles Mora
                    Ugalde, Georgina Corona Velázquez, Andrea Sanabria Pacas,
                    Elizabeth Díaz Lerma, Paulina González González, Thelma
                    Grappin Oseguera, Aster Donato Chávez, Karla Fernanda López
                    Cuevas, Andrea Ortega Zavala y Adriana González González,
                    por crear espacios que fomentan y apoyan iniciativas como
                    esta. Su compromiso con la promoción de la equidad de género
                    y la inclusión ha sido fundamental para el desarrollo de
                    este proyecto.
                </p>
                <p>
                    A las talentosas artistas, Sandrine Ayala Viades, Aranza
                    Alvarez Diaz Barriga y Casandra García Cadeñanes se les está
                    infinitamente agradecidas por dar vida a este proyecto y
                    plasmar en él el mensaje de interseccionalidad en la mujer
                    de una manera tan impactante y hermosa. Su creatividad y
                    dedicación han sido esenciales para llevar a cabo esta obra
                    que inspira y promueve la diversidad.
                </p>
                <p>
                    Quisiéramos también expresar la gratitud a todo el equipo
                    dentro del Tecnológico de Monterrey que ha impulsado este
                    proyecto. A Grace Bustamante, quien brindó orientación y
                    apoyo desde el inicio, siempre creyendo en los objetivos y
                    valores de Gender Watch. A Mayra González y Pascual Alcocer,
                    quienes no solo nos guiaron y proporcionaron los recursos
                    necesarios para hacerlo realidad, sino que también nos
                    ayudaron a impulsar la participación estudiantil y valores
                    de nuestra institución en este proyecto para hacerlo
                    realidad.
                </p>
                <p>
                    A Alejandra Carreño y Aldara Aguirre, gracias por su
                    orientación y dedicación pues han sido fundamentales en cada
                    etapa de este proyecto, el compromiso con el crecimiento y
                    desarrollo de Gender Watch ha sido inspirador y ejemplar.
                    Gracias a su visión y dirección, hemos fortalecido nuestro
                    impacto en la comunidad estudiantil y más allá.
                </p>
                <p>
                    Un profundo y especial reconocimiento a cada miembro del
                    equipo que ha compartido su apoyo inquebrantable y que hoy
                    nos permite difundir el impacto de este mural:
                </p>
                <ul>
                    <li>
                        Emilia Betancourt y Diego Pintor, por creer en nuestra
                        iniciativa y crear una historia visual en la que podamos
                        compartir la trayectoria, esencia e impacto que ha
                        tenido este proyecto en todes nosotres.{' '}
                    </li>
                    <li>
                        Alan Razo, por su invaluable contribución al crear esta
                        página web que nos brindará una plataforma donde
                        podremos compartir y preservar la importancia de este
                        proyecto de una manera accesible para todes.
                    </li>
                </ul>
                <p>
                    Sin su colaboración y apoyo incondicional, este proyecto no
                    habría sido posible. Se está profundamente agradecido por su
                    compromiso y dedicación hacia la creación de un entorno más
                    inclusivo y equitativo en nuestra comunidad universitaria.
                    ¡Gracias por creer en nosotros y en nuestra visión!
                </p>
            </div>
            <div>
                <img src={hand} alt='mural tejiendo identidades' width={400} />
            </div>
        </div>
    );
};

export default Aknowledgements;
