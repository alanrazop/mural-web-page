import React, { useEffect, useState } from 'react';
import '../styles/landing.css';
import logo from '../assets/mural.jpeg';

const Gallery = () => {
    useEffect(() => {}, []);

    return (
        <div>
            <div className='containerTitle'>
                <b>Galería</b>
            </div>
            <div className='container'>
                <div class='logoFundacion'>
                    <img
                        src={logo}
                        alt='mural tejiendo identidades'
                        width={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
