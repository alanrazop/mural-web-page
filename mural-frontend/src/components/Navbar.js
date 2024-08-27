import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogOut } from 'react-feather';
import { isAuthenticated, logOut } from '../utils/auth';
import routes from '../routes';
import '../styles/navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation(); // Obtener la ruta actual
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú

    const logOutHandler = async () => {
        logOut();
        navigate('/login');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar-brand">
                <button className="hamburger" onClick={toggleMenu}>
                    &#9776; {/* Icono de hamburguesa */}
                </button>
            </div>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                {routes
                    .filter(route => route.inNavbar)
                    .map(route => (
                        <a
                            key={route.path}
                            className={`navbar-button ${location.pathname === route.path ? 'active' : ''}`}
                            onClick={() => {
                                navigate(route.path);
                                setIsOpen(false); // Cierra el menú después de la selección
                            }}
                        >
                            {route.name}
                        </a>
                    ))}
            </div>
            <div className="navbar-logout">
                {isAuthenticated() && (
                    <a onClick={logOutHandler}>
                        <span>Cerrar sesión</span>
                        <LogOut color="white" />
                    </a>
                )}
            </div>
        </div>
    );
}

export default Navbar;
