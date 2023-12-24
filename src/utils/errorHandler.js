```javascript
const logger = require('./logger');

// Error handling middleware
const errorHandler = (err, req, res, next) => {
    // Log the error details
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    // Send error response
    res.status(err.status || 500);
    res.json({
        status: 'error',
        message: err.message,
    });
};

module.exports = errorHandler;
```
