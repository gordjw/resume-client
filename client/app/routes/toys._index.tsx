import { Main } from "~/components/main";
import { Nav } from "~/components/nav";
import { MetaFunction, json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Toy } from "~/components/toy";

export const meta: MetaFunction = () => {
    return [
        { title: "Gordon Williamson - Full stack developer" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export async function loader({ params, }: LoaderFunctionArgs) {
    return json([{
        "name": "Starfield",
        "type": "Javascript",
        "description": "",
        "url": "starfield"
    },
    {
        "name": "Fibonacci calculator",
        "type": "Algorithm",
        "description": "",
        "url": "fibonacci"
    },
    ])
}


export default function Index() {
    const toys = useLoaderData<typeof loader>();

    return (
        <>
            {
                toys.map(toy => {
                    return (<Toy toy={toy} />)
                })
            }
        </>
    );
}
