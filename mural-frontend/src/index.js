import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
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
                                        <Suspense fallback={<LoadingSpinner />}>
                                            <route.Component />
                                        </Suspense>
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
                                        <Suspense fallback={<LoadingSpinner />}>
                                            <route.Component />
                                        </Suspense>
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
