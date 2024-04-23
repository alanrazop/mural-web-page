import React, { useEffect, useState } from 'react';
import '../styles/landing.css';
import logo from '../assets/mural.jpeg';
import InputImage from '../components/InputImage';
import Carousel from '../components/Carousel';

const Gallery = () => {
    useEffect(() => {}, []);
    return (
        <div>
            <div className='containerTitle'>
                <b>Galería</b>
            </div>
            <div className='container'>
                <div class='logoFundacion'>
                    <InputImage label={'Sube un archivo'} />
                </div>
                <Carousel />
            </div>
        </div>
    );
};

export default Gallery;
