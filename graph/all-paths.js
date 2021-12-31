import { nodes,routes ,buildGraph } from "./common.js";


// Main
export const findallPossiblePath = (nodes,routes,startNode,stopNode) => {
     // build the graph
     const graph = buildGraph(nodes,routes)
     // find all path
     return findPath(graph,startNode,stopNode,new Set(),[],[])
};
 
// Modified DFS
const findPath = (graph,src,dst,visited,currentPath,allPossiblePath) => {
     currentPath.push(src)
     // if source is eq to destination return the 
     if(src === dst) {
        allPossiblePath.push(currentPath.toString())
        currentPath.pop()
        return 
     }

     visited.add(src)

     // get connected nodes
     const srcNodes = graph.get(src);

     for(let neighbor of srcNodes ){
        if(!visited.has(neighbor)){
             findPath(graph,neighbor,dst,visited,currentPath,allPossiblePath) === true
        }
     }
 
     visited.delete(src)
     currentPath.pop()

     return allPossiblePath
}

 
 
 