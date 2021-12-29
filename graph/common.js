

export const nodes = 'A B C D E F G H'.split(' ');

export const routes = [
     ['A', 'D'],
     ['A', 'B'],
     ['A', 'H'],
     ['B', 'C'],
     ['B', 'D'],
     ['C', 'D'],
     ['C', 'F'],
     ['D', 'E'],
     ['E', 'F'],
     ['E', 'H'],
     ['F', 'G'],
     ['G', 'H']
 ];

 export const buildGraph = (nodes,routes) =>{
    // The graph
    const adjacencyList = new Map()

    // Add node
    function addNode(nodes){
        adjacencyList.set(nodes,[])
    }

    // add edge,undirected
    function addEdge(origin,destination){
        adjacencyList.get(origin).push(destination)
        adjacencyList.get(destination).push(origin)
    }

    nodes.forEach(addNode)
    routes.forEach(route => addEdge(...route))
    return adjacencyList

}