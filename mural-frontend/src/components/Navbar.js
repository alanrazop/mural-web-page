import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FireQuestion } from '../utils/alertHandler';
import { LogOut, Key } from 'react-feather';
import { logOut } from '../utils/auth';
import routes from '../routes';
import '../styles/navbar.css';
import { isAuthenticated } from '../utils/auth';

function Navbar() {
    const navigate = useNavigate();

    const logOutHandler = async () => {
        const confirmation = await FireQuestion(
            '¿Está seguro de que quiere cerrar sesión?',
            'Tendrá que iniciar sesión de nuevo para volver a entrar.',
            'Cerrar sesión'
        );
        if (confirmation.isDismissed) return;
        logOut();
    };

    return (
        <div className='navbar'>
            <div>
                {routes
                    .filter((route) => route.inNavbar)
                    .map((route) => (
                        <a
                            key={route.path}
                            className='navbar-button'
                            id='inicio_btn'
                            onClick={() => navigate(route.path)}
                        >
                            {route.name}
                        </a>
                    ))}
            </div>
            <div className='navbar-logout'>
                {isAuthenticated() && (
                    <a onClick={logOutHandler}>
                        <span>Cerrar sesión</span>
                        <LogOut color='white' />
                    </a>
                )}
                {/* <a onClick={() => navigate('/login')}>
                    <span>Iniciar sesión</span>
                    <Key color='white' />
                </a> */}
            </div>
        </div>
    );
}

export default Navbar;
