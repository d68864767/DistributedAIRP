```javascript
const mongoose = require('mongoose');
const Dataset = require('../models/dataset'); // Assuming you have a Dataset model defined in models directory
const logger = require('../utils/logger');

// Service for managing datasets

class DatasetService {
    // Get all datasets
    async getAllDatasets() {
        try {
            const datasets = await Dataset.find();
            return datasets;
        } catch (error) {
            logger.error(`Error fetching datasets: ${error}`);
            throw error;
        }
    };

    // Get a specific dataset by ID
    async getDatasetById(id) {
        try {
            const dataset = await Dataset.findById(id);
            if (!dataset) {
                throw new Error('Dataset not found');
            } else {
                return dataset;
            }
        } catch (error) {
            logger.error(`Error fetching dataset: ${error}`);
            throw error;
        }
    };

    // Create a new dataset
    async createDataset(datasetData) {
        try {
            const dataset = new Dataset(datasetData);
            const result = await dataset.save();
            return result;
        } catch (error) {
            logger.error(`Error creating dataset: ${error}`);
            throw error;
        }
    };

    // Update a dataset
    async updateDataset(id, datasetData) {
        try {
            const dataset = await Dataset.findByIdAndUpdate(id, datasetData, { new: true });
            if (!dataset) {
                throw new Error('Dataset not found');
            } else {
                return dataset;
            }
        } catch (error) {
            logger.error(`Error updating dataset: ${error}`);
            throw error;
        }
    };

    // Delete a dataset
    async deleteDataset(id) {
        try {
            const dataset = await Dataset.findByIdAndRemove(id);
            if (!dataset) {
                throw new Error('Dataset not found');
            } else {
                return dataset;
            }
        } catch (error) {
            logger.error(`Error deleting dataset: ${error}`);
            throw error;
        }
    };
}

module.exports = new DatasetService();
```
