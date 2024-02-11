class Graph {
    constructor(graph, start, dest) {
        this.graph = graph;
        this.start = start;
        this.dest = dest;
    }

    traverse() {
        let unvisited = new Set();
        let predecessors = new Map();
        let distances = new Map();

        // Initialise the unvisited set and the distance map
        for( let node of Object.keys(this.graph) ) {
            unvisited.add(node);

            if ( node === start ) {
                distances[node] = 0
            } else {
                distances[node] = Infinity
            }
        }

        while (unvisited.size > 0 ) {
            let closest_node = this.get_closest_node(distances, unvisited)
            unvisited.delete(closest_node)

            if( closest_node === dest )
                break

            for( let neighbour of Object.keys(this.graph[closest_node]) ) {
                if( unvisited.has(neighbour) === false )
                    continue
                
                let distance_so_far = distances[closest_node]
                let distance_to_neighbour = distance_so_far + this.graph[closest_node][neighbour]

                if( distance_to_neighbour < distances[neighbour] ) {
                    distances[neighbour] = distance_to_neighbour
                    predecessors[neighbour] = closest_node
                }
            }
        }
        console.dir(distances)


        return this.get_shortest_path(dest, predecessors)
    }

    get_shortest_path(dest, predecessors) {
        let path = [dest];
        let cur = dest

        while( predecessors[cur] !== undefined ) {
            path.push(predecessors[cur])
            cur = predecessors[cur]
        }

        console.dir(predecessors)

        return path.reverse();
    }

    get_closest_node(distances, unvisited) {
        let closest_distance = Infinity
        let closest_node = null

        for( let node of unvisited ) {
            if( distances[node] < closest_distance ) {
                closest_distance = distances[node]
                closest_node = node
            }
        }

        return closest_node
    }
}

const adjacencyList = {
    "a": {"b": 20, "c": 30, "d": 30},
    "b": {"d": 1},
    "c": {"e": 1},
    "d": {"e": 3},
    "e": {}
}
const start = "a"
const dest = "e"

const graph = new Graph(adjacencyList, start, dest)
console.log(graph.traverse())