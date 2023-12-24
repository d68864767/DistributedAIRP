```javascript
const mongoose = require('mongoose');
const Dataset = require('../../models/dataset'); // Assuming you have a Dataset model defined in models directory
const logger = require('../../utils/logger');
const errorHandler = require('../../utils/errorHandler');

// Get all datasets
exports.getAllDatasets = async (req, res) => {
    try {
        const datasets = await Dataset.find();
        res.status(200).json(datasets);
    } catch (error) {
        logger.error(`Error fetching datasets: ${error}`);
        errorHandler(error, req, res);
    }
};

// Get a specific dataset by ID
exports.getDatasetById = async (req, res) => {
    try {
        const dataset = await Dataset.findById(req.params.id);
        if (!dataset) {
            res.status(404).json({ message: 'Dataset not found' });
        } else {
            res.status(200).json(dataset);
        }
    } catch (error) {
        logger.error(`Error fetching dataset: ${error}`);
        errorHandler(error, req, res);
    }
};

// Create a new dataset
exports.createDataset = async (req, res) => {
    try {
        const newDataset = new Dataset(req.body);
        const dataset = await newDataset.save();
        res.status(201).json(dataset);
    } catch (error) {
        logger.error(`Error creating dataset: ${error}`);
        errorHandler(error, req, res);
    }
};

// Update a dataset
exports.updateDataset = async (req, res) => {
    try {
        const dataset = await Dataset.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!dataset) {
            res.status(404).json({ message: 'Dataset not found' });
        } else {
            res.status(200).json(dataset);
        }
    } catch (error) {
        logger.error(`Error updating dataset: ${error}`);
        errorHandler(error, req, res);
    }
};

// Delete a dataset
exports.deleteDataset = async (req, res) => {
    try {
        const dataset = await Dataset.findByIdAndRemove(req.params.id);
        if (!dataset) {
            res.status(404).json({ message: 'Dataset not found' });
        } else {
            res.status(200).json({ message: 'Dataset deleted successfully' });
        }
    } catch (error) {
        logger.error(`Error deleting dataset: ${error}`);
        errorHandler(error, req, res);
    }
};
```
