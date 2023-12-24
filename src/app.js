const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/database');
const logger = require('./utils/logger');
const { PORT } = require('./config/server');

// Load environment variables from .env file
dotenv.config();

// Create Express server
const app = express();

// Import routes
const datasetRoutes = require('./api/routes/datasetRoutes');
const projectRoutes = require('./api/routes/projectRoutes');

// Use routes
app.use('/api/datasets', datasetRoutes);
app.use('/api/projects', projectRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to the database
mongoose.connect();

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

module.exports = app;
