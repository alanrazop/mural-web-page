import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { FireError, FireSucess } from '../utils/alertHandler';
import { postLogin } from '../client/authentication';
import { setToken, setAdminUserSaved, isAuthenticated } from '../utils/auth';
import axios from 'axios';
import '../styles/auth.css';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postLogin(email, password);
            if (response.status === 'success') {
                axios.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${response.token}`;

                setToken(response.token);
                setAdminUserSaved(response.data.user);
                navigate('/');
            }
        } catch (error) {
            if (error.response.status === 401)
                FireError(error.response.data.message);
            else FireError('Ocurrió un error. Por favor intenta de nuevo.');
        }
    };

    if (isAuthenticated()) return <Navigate to='/' />;

    return (
        <div className='auth-container'>
            <h2>Iniciar Sesión</h2>
            <form>
                <div>
                    <Input
                        type='email'
                        id='email'
                        label='Correo electrónico'
                        required
                        getVal={email}
                        setVal={setEmail}
                    />
                </div>
                <br></br>
                <div>
                    <Input
                        type='password'
                        id='password'
                        label='Contraseña'
                        required
                        getVal={password}
                        setVal={setPassword}
                    />
                </div>
                <br></br>
                <Button
                    type='action'
                    text='Iniciar sesión'
                    action={handleSubmit}
                />
            </form>
            {/* <section>
                <Link to='/signup'>Registrarse</Link>
                <Link to='/cambiarContrasena'>Olvidé mi contraseña</Link>
            </section> */}
        </div>
    );
};

export default LoginForm;
