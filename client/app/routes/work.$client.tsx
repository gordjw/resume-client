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
    return json({ "client": params.client });
}

export default function Index() {
    const data = useLoaderData<typeof loader>();
    return (
        <h2>Client - {data.client}</h2>
    );
}
