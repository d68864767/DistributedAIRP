```javascript
const os = require('os');
const logger = require('../utils/logger');

class NodeManager {
    constructor() {
        this.nodes = [];
    }

    // Method to add a new node
    addNode(node) {
        this.nodes.push(node);
        logger.info(`Node added: ${node.id}`);
    }

    // Method to remove a node
    removeNode(nodeId) {
        const index = this.nodes.findIndex(node => node.id === nodeId);
        if (index !== -1) {
            this.nodes.splice(index, 1);
            logger.info(`Node removed: ${nodeId}`);
        } else {
            logger.error(`Node not found: ${nodeId}`);
        }
    }

    // Method to get a node by id
    getNode(nodeId) {
        const node = this.nodes.find(node => node.id === nodeId);
        if (node) {
            return node;
        } else {
            logger.error(`Node not found: ${nodeId}`);
            return null;
        }
    }

    // Method to get all nodes
    getNodes() {
        return this.nodes;
    }

    // Method to get system information
    getSystemInfo() {
        return {
            totalMemory: os.totalmem(),
            freeMemory: os.freemem(),
            cpuCount: os.cpus().length,
            loadAvg: os.loadavg()
        };
    }
}

module.exports = new NodeManager();
```
