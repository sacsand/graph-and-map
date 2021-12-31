import { nodes,routes } from "./common";
import {findShortestPath} from "./shortest-path"


test('when StartNode = A and StopsNode = H', () => {
    expect(JSON.stringify(findShortestPath(nodes,routes,"A","H"))).toBe(JSON.stringify({ numberOfHops: 1, shortestPath: [ 'A', 'H' ] }));
})


test('when StartNode = A and StopsNode = G', () => {
    expect(JSON.stringify(findShortestPath(nodes,routes,"A","G",))).toBe(JSON.stringify({ numberOfHops: 2, shortestPath: [ 'A', 'H', 'G'] }));
})

test('when StartNode = A and StopsNode is not presnt in the', () => {
    expect(JSON.stringify(findShortestPath(nodes,routes,"A","X",))).toBe(JSON.stringify({ numberOfHops: -1, shortestPath: null}));
})

test('when StartNode and StopsNode is the same', () => {
    expect(JSON.stringify(findShortestPath(nodes,routes,"A","A",))).toBe(JSON.stringify({ numberOfHops: 0, shortestPath: [ 'A', 'A' ]}));
})