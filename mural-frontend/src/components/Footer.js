import React from 'react';
import '../styles/footer.css'; // Import the CSS file for styling
import logo from '../assets/logo_gw.png';
import ig from '../assets/instagram.png';
import fb from '../assets/facebook.png';
import tw from '../assets/twitter.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                {/* First column */}
                <div className='footer-column'>
                    <img
                        className='logo-footer'
                        src={logo}
                        alt='mural tejiendo identidades'
                    />
                </div>
                {/* Second column */}
                <div className='footer-column'>
                    {/* Sub-columns within the second column */}
                    <div className='sub-column'>
                        <a href='https://www.instagram.com/gender.watcher/'>
                            <img
                                className='logo-socials'
                                src={ig}
                                alt='instagram'
                            />
                        </a>
                    </div>
                    <div className='sub-column'>
                        <a href='https://www.facebook.com/GenderWatch.SEG'>
                            <img
                                className='logo-socials'
                                src={fb}
                                alt='facebook'
                            />
                        </a>
                    </div>
                    <div className='sub-column'>
                        <a href='https://twitter.com/gender_watcher'>
                            <img
                                className='logo-socials'
                                src={tw}
                                alt='twitter'
                            />
                        </a>
                    </div>
                </div>
            </div>
            <p> © 2024 Gender Watch</p>
        </footer>
    );
}

export default Footer;
