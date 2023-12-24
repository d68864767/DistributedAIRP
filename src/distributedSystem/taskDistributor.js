```javascript
const logger = require('../utils/logger');
const NodeManager = require('./nodeManager');

class TaskDistributor {
    constructor() {
        this.nodeManager = new NodeManager();
    }

    // Method to distribute a task to a node
    distributeTask(task) {
        // Get the list of nodes
        const nodes = this.nodeManager.getNodes();

        // If there are no nodes, log an error and return
        if (nodes.length === 0) {
            logger.error('No nodes available to distribute tasks');
            return;
        }

        // Find the node with the least load
        let minLoad = nodes[0].load;
        let minLoadNode = nodes[0];

        for (let i = 1; i < nodes.length; i++) {
            if (nodes[i].load < minLoad) {
                minLoad = nodes[i].load;
                minLoadNode = nodes[i];
            }
        }

        // Assign the task to the node with the least load
        minLoadNode.assignTask(task);

        logger.info(`Task ${task.id} distributed to node ${minLoadNode.id}`);
    }

    // Method to handle a node failure
    handleNodeFailure(nodeId) {
        // Remove the failed node
        this.nodeManager.removeNode(nodeId);

        // Redistribute the tasks of the failed node
        const tasks = this.nodeManager.getNodeTasks(nodeId);
        tasks.forEach(task => this.distributeTask(task));

        logger.info(`Tasks of failed node ${nodeId} redistributed`);
    }
}

module.exports = TaskDistributor;
```
