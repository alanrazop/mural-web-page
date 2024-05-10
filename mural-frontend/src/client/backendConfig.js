let BASE_URL = '';

const environment = process.env.REACT_APP_ENVIRONMENT;

if (environment === 'production') {
    BASE_URL = process.env.REACT_APP_BASE_API_ENDPOINT_PROD;
} else if (environment === 'testing') {
    BASE_URL = process.env.REACT_APP_BASE_API_ENDPOINT_TEST;
} else {
    BASE_URL = process.env.REACT_APP_BASE_API_ENDPOINT_DEV;
}

export default BASE_URL;
