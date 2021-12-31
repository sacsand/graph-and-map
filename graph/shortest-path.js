import { nodes,routes ,buildGraph } from "./common.js";



// modified BFS 
 export const findShortestPath = (nodes,routes,startNode, stopNode) => {
    // build graph
    const adjacencyList = buildGraph(nodes,routes)
    // store previous path visited
    const previous = new Map();
    // keep track of the visites nodes
    const visited = new Set();
    const queue = [];
    // add first node to the queue
    queue.push(startNode);
    visited.add(startNode);
  
    while (queue.length > 0) {
      let shortestPath
      let node = queue.shift();
      if (node === stopNode)  { 
        return {numberOfHops: 0, shortestPath:[node,stopNode]} 
      };
  
        for (let neighbour of adjacencyList.get(node)) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                if (neighbour === stopNode) {   // Check if the path is complete.
                     // If backtrack through the path.
                    shortestPath = [ neighbour ]  
                    while (node !== startNode) {
                        shortestPath.push(node)
                        node = previous.get(node)
                    }
                    shortestPath.push(node)
                    shortestPath.reverse()
                    return {numberOfHops: shortestPath.length-1, shortestPath} 
                }
                previous.set(neighbour, node);
                queue.push(neighbour)
            }
        }
    }

    return {numberOfHops: -1, shortestPath:null} 
}







