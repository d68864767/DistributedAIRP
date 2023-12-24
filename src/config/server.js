const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);

// Use common 3rd-party middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Secure the app by setting various HTTP headers
app.use(helmet());

// Enable request logging
app.use(morgan('dev'));

module.exports = app;
