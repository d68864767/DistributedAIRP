```javascript
const mongoose = require('mongoose');
const Project = require('../models/project'); // Assuming you have a Project model defined in models directory
const logger = require('../utils/logger');

// Service for managing projects

class ProjectService {
    // Get all projects
    async getAllProjects() {
        try {
            const projects = await Project.find();
            return projects;
        } catch (error) {
            logger.error(`Error fetching projects: ${error}`);
            throw error;
        }
    };

    // Get a specific project by ID
    async getProjectById(id) {
        try {
            const project = await Project.findById(id);
            if (!project) {
                throw new Error('Project not found');
            }
            return project;
        } catch (error) {
            logger.error(`Error fetching project: ${error}`);
            throw error;
        }
    };

    // Create a new project
    async createProject(projectData) {
        try {
            const project = new Project(projectData);
            const savedProject = await project.save();
            return savedProject;
        } catch (error) {
            logger.error(`Error creating project: ${error}`);
            throw error;
        }
    };

    // Update a project
    async updateProject(id, projectData) {
        try {
            const project = await Project.findByIdAndUpdate(id, projectData, { new: true });
            if (!project) {
                throw new Error('Project not found');
            }
            return project;
        } catch (error) {
            logger.error(`Error updating project: ${error}`);
            throw error;
        }
    };

    // Delete a project
    async deleteProject(id) {
        try {
            const project = await Project.findByIdAndRemove(id);
            if (!project) {
                throw new Error('Project not found');
            }
            return project;
        } catch (error) {
            logger.error(`Error deleting project: ${error}`);
            throw error;
        }
    };
}

module.exports = new ProjectService();
```
