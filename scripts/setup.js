const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const dbConnectionURL = {
  'LOCALURL': `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
};

// Connect to the database
mongoose.connect(dbConnectionURL.LOCALURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.error(`Error connecting to the database. \n${error}`);
});

// Check if the necessary directories exist, if not create them
const directories = [
  'src/api/middleware',
  'src/api/validators',
  'src/api/routes',
  'test/integrationTests',
  'test/unitTests',
  'public/css',
  'public/js',
  'views/layouts'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Check if the necessary files exist, if not create them
const files = [
  'src/api/controllers/datasetController.js',
  'src/api/controllers/projectController.js',
  'src/services/datasetService.js',
  'src/services/projectService.js',
  'src/distributedSystem/nodeManager.js',
  'src/distributedSystem/taskDistributor.js',
  'src/aiModels/privacyPreservingModel.js',
  'src/aiModels/dataAnalysisModel.js',
  'docs/API_Docs.md',
  'docs/User_Manual.md',
  'docs/Technical_Overview.md',
  'public/index.html'
];

files.forEach(file => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '', 'utf8');
    console.log(`Created file: ${file}`);
  }
});

console.log('Setup completed successfully.');
