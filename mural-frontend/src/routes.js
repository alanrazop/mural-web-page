import LoginForm from './screens/Login';
import Landing from './screens/Landing';
import SignupForm from './screens/Signup';
import ForgotPassword from './screens/forgotPassword';
import AboutProject from './screens/AboutProject';
import AboutUs from './screens/AboutUs';
import Documentary from './screens/Documentary';
import Forum from './screens/Forum';
import Gallery from './screens/Gallery';
import Aknowledgements from './screens/Aknowledgements';

const routes = [
    {
        path: '/',
        name: 'Inicio',
        Component: Landing,
        isPrivate: false,
        inNavbar: true,
    },
    {
        path: '/sobre-el-proyecto',
        name: 'Sobre el proyecto',
        Component: AboutProject,
        isPrivate: false,
        inNavbar: true,
    },
    {
        path: '/sobreNosotrxs',
        name: 'Sobre nosotrxs',
        Component: AboutUs,
        isPrivate: false,
        inNavbar: true,
    },
    {
        path: '/documentary',
        name: 'Documental',
        Component: Documentary,
        isPrivate: false,
        inNavbar: true,
    },
    {
        path: '/forum',
        name: 'Foro',
        Component: Forum,
        isPrivate: false,
        inNavbar: true,
    },
    {
        path: '/gallery',
        name: 'Galería',
        Component: Gallery,
        isPrivate: false,
        inNavbar: true,
    },
    {
        path: '/aknowlegements',
        name: 'Agradecimientos',
        Component: Aknowledgements,
        isPrivate: false,
        inNavbar: true,
    },
    {
        path: '/login',
        name: 'Iniciar sesión',
        Component: LoginForm,
        isPrivate: false,
        inNavbar: false,
    },
    {
        path: '/signup',
        name: 'Registrarse',
        Component: SignupForm,
        isPrivate: false,
        inNavbar: false,
    },
    {
        path: '/cambiarContrasena',
        name: 'Cambiar contraseña',
        Component: ForgotPassword,
        isPrivate: false,
        inNavbar: false,
    },
];

export default routes;
