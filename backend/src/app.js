const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors({
	origin: '*' // is not recomend to production mode.
}));

app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
