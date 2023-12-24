```javascript
const mongoose = require('mongoose');
const Project = require('../../models/project'); // Assuming you have a Project model defined in models directory
const logger = require('../../utils/logger');
const errorHandler = require('../../utils/errorHandler');

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        logger.error(`Error fetching projects: ${error}`);
        errorHandler(error, req, res);
    }
};

// Get a specific project by ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            res.status(404).json({ message: 'Project not found' });
        } else {
            res.status(200).json(project);
        }
    } catch (error) {
        logger.error(`Error fetching project: ${error}`);
        errorHandler(error, req, res);
    }
};

// Create a new project
exports.createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (error) {
        logger.error(`Error creating project: ${error}`);
        errorHandler(error, req, res);
    }
};

// Update a project
exports.updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject) {
            res.status(404).json({ message: 'Project not found' });
        } else {
            res.status(200).json(updatedProject);
        }
    } catch (error) {
        logger.error(`Error updating project: ${error}`);
        errorHandler(error, req, res);
    }
};

// Delete a project
exports.deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndRemove(req.params.id);
        if (!deletedProject) {
            res.status(404).json({ message: 'Project not found' });
        } else {
            res.status(200).json({ message: 'Project deleted successfully' });
        }
    } catch (error) {
        logger.error(`Error deleting project: ${error}`);
        errorHandler(error, req, res);
    }
};
```
