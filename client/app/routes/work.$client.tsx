import type { MetaFunction } from "@remix-run/node";
import { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "Gordon Williamson - Full stack developer" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export async function loader({ params, }: LoaderFunctionArgs) {
    const host = "http://localhost:8090"
    const endpoint = `/api/roles/${params.client}`

    const response = await fetch(host + endpoint, {
        method: "GET",
        mode: "cors",
    })
    console.log(response)
    const role = await response.json()

    return role
}

export default function Index() {
    const role = useLoaderData<typeof loader>();

    return (
        <div>
            <h2>{role.title}</h2>
            <h3>{role.client}</h3>
        </div>
    );
}
