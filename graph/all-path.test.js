import { nodes,routes } from "./common";
import {findallPossiblePath} from "./all-paths"


test('when StartNode = A and StopsNode = H', () => {
    expect(JSON.stringify(findallPossiblePath(nodes,routes,"A","H"))).toBe(JSON.stringify([  
    'A,D,B,C,F,E,H',   'A,D,B,C,F,G,H',
    'A,D,C,F,E,H',     'A,D,C,F,G,H',
    'A,D,E,F,G,H',     'A,D,E,H',
    'A,B,C,D,E,F,G,H', 'A,B,C,D,E,H',
    'A,B,C,F,E,H',     'A,B,C,F,G,H',
    'A,B,D,C,F,E,H',   'A,B,D,C,F,G,H',
    'A,B,D,E,F,G,H',   'A,B,D,E,H',
    'A,H']));
})



test('when StartNode = A and StopsNode = G', () => {
    expect(JSON.stringify(findallPossiblePath(nodes,routes,"A","G"))).toBe(JSON.stringify([  
        'A,D,B,C,F,E,H,G', 'A,D,B,C,F,G',
        'A,D,C,F,E,H,G',   'A,D,C,F,G',
        'A,D,E,F,G',       'A,D,E,H,G',
        'A,B,C,D,E,F,G',   'A,B,C,D,E,H,G',
        'A,B,C,F,E,H,G',   'A,B,C,F,G',
        'A,B,D,C,F,E,H,G', 'A,B,D,C,F,G',
        'A,B,D,E,F,G',     'A,B,D,E,H,G',
        'A,H,E,D,B,C,F,G', 'A,H,E,D,C,F,G',
        'A,H,E,F,G',       'A,H,G'
    ]));
})


test('when One of the node is not in the graph', () => {
    expect(JSON.stringify(findallPossiblePath(nodes,routes,"A","X"))).toBe(JSON.stringify([]));
})

