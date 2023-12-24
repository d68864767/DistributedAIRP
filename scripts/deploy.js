const { exec } = require('child_process');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Define the command to start the server
const startServerCommand = `node ${path.join(__dirname, '../src/app.js')}`;

// Define the command to start the node manager
const startNodeManagerCommand = `curl -X POST ${process.env.NODE_MANAGER_URL}/start`;

// Define the command to start the task distributor
const startTaskDistributorCommand = `curl -X POST ${process.env.TASK_DISTRIBUTOR_URL}/start`;

// Function to execute a command and log its output
function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

console.log('Starting server...');
executeCommand(startServerCommand);

console.log('Starting node manager...');
executeCommand(startNodeManagerCommand);

console.log('Starting task distributor...');
executeCommand(startTaskDistributorCommand);

console.log('Deployment complete.');
