import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import type { MetaFunction } from "@remix-run/node";
import fcose from 'cytoscape-fcose'

Cytoscape.use(fcose)


export const meta: MetaFunction = () => {
    return [
        { title: "Gordon Williamson - Full stack developer" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export async function clientLoader() {
    return null
}

clientLoader.hydrate = true;

export function HydrateFallback() {
    return (
        <>
            <h2>Loading</h2>
        </>
    );
}

export default function Index() {
    const elements = CytoscapeComponent.normalizeElements({
        nodes: [
            { data: { id: 'a', label: 'A' } },
            { data: { id: 'b', label: 'B' } },
            { data: { id: 'c', label: 'C' } },
            { data: { id: 'd', label: 'D' } },
            { data: { id: 'e', label: 'E' } },
        ],
        edges: [
            { data: { source: 'a', target: 'b', label: '1', weight: 10 } },
            { data: { source: 'a', target: 'c', label: '1', weight: 20 } },
            { data: { source: 'a', target: 'd', label: '1', weight: 100 } },
            { data: { source: 'b', target: 'd', label: '1', weight: 30 } },
            { data: { source: 'c', target: 'e', label: '1', weight: 50 } },
            { data: { source: 'd', target: 'e', label: '1', weight: 1 } },
        ]
    })

    const layout = {
        name: 'fcose',
        idealEdgeLength: (edge: any) => { return edge.data('weight') },
    };

    const stylesheet = [
        {
            selector: 'edge',
            style: {
                'label': 'data(weight)',
                'width': 0.3,
                'target-arrow-shape': 'triangle-backcurve',
                'target-arrow-fill': 'filled',
                'target-arrow-width': '110%',
                'arrow-scale': 1,
                'source-endpoint': 'outside-to-line',
                'target-endpoint': 'outside-to-line',
                'font-size': '4px',
                'color': '#313131'
            }
        },
        {
            selector: 'node',
            style: {
                'label': 'data(label)',
                'width': 10,
                'height': 10,
                'shape': 'circle',
                'background-color': 'white',
                'border-width': 0.3,
                'border-color': '#313131',
                'outline-width': 0,
                'outline-color': 'red',
                'text-halign': 'center',
                'text-valign': 'center',
                'font-size': '6px'
            }
        }

    ]


    return (
        <>
            <div className='p-6 col-span-2 shadow-lg'>
                <CytoscapeComponent elements={elements} layout={layout} stylesheet={stylesheet} style={{ width: '100%', height: '60svh' }} />
            </div>
            <div className=' p-6 col-span-2 shadow-lg'>
                <h1 className='text-2xl'>Djikstra's algorithm</h1>
                <p>This is one algorithm for finding the shortest path between two nodes in a weighted graph.</p>
                <p>In our example, the shortest path from A to E is A - B - D - E.</p>
            </div>
        </>
    );
}