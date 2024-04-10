const express = require('express');
const morgan = require('morgan');

const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
});

// ROUTES
app.use('/api/v1/users', userRoutes);

module.exports = app;
