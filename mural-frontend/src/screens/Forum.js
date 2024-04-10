import React, { useEffect, useState } from 'react';
import '../styles/landing.css';
import logo from '../assets/mural.jpeg';

const Forum = () => {
    useEffect(() => {}, []);

    return (
        <div>
            <div className='containerTitle'>
                <b>Foro</b>
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

export default Forum;
