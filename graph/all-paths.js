import { nodes,routes ,buildGraph } from "./common.js";


// Main
const findAllPath = (nodeA,nodeB) => {
     // build the graph
     const graph = buildGraph(nodes,routes)
     // find all path
     return findPath(graph,nodeA,nodeB,new Set(),[],[])
};
 
const findPath = (graph,src,dst,visited,currentPath,allPath) => {
     currentPath.push(src)
     // if source is eq to destination return the 
     if(src === dst) {
        allPath.push(currentPath.toString())
        currentPath.pop()
        return 
     }

     visited.add(src)

     // get connected nodes
     const srcNodes = graph.get(src);

     for(let neighbor of srcNodes ){
        if(!visited.has(neighbor)){
             findPath(graph,neighbor,dst,visited,currentPath,allPath) === true
        }
     }
 
     visited.delete(src)
     currentPath.pop()

     return allPath
}



 // Find
console.log(findAllPath("A","H"))
 
 
 