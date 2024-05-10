import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import routes from './routes';
import './styles/style.css';
import Footer from './components/Footer';

function App() {
    return (
        <div id='app-container'>
            <div id='app-base-layout'>
                <Routes>
                    {routes.map((route) =>
                        route.isPrivate ? (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <PrivateRoute>
                                        <Navbar />
                                        <route.Component />
                                        <Footer />
                                    </PrivateRoute>
                                }
                            />
                        ) : (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <div>
                                        <Navbar />
                                        <route.Component />
                                        <Footer />
                                    </div>
                                }
                            />
                        )
                    )}
                </Routes>
            </div>
        </div>
    );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
