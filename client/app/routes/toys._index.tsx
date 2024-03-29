import { MetaFunction, json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Toy from "~/components/toy";
import { useRouteError } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "Gordon Williamson - Full stack developer" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export async function loader({ params, }: LoaderFunctionArgs) {
    const host = "http://localhost:8090"
    const endpoint = "/api/toys"
    let toys;
    
    try {
        console.log(host+endpoint)
        const response = await fetch( host + endpoint, {
            method: "GET",
            mode: "cors"
        })
        toys = await response.json()
    } catch(err) {
        console.log(err)
        return null
    }

    return toys
}

export function ErrorBoundary() {
    const error = useRouteError();

    return(
        <div className="rounded shadow-lg p-6">
        <h2>Something went wrong</h2>
        <p>We couldn't complete this request.</p>
        </div>
    )
  }
  

export default function Index() {
    const toys = useLoaderData<typeof loader>();
    const toyList: React.ReactElement[] = []
    Object.keys(toys).forEach((key: string) => {
        toyList.push(<Toy key={key} toy={toys[key]} />)
    })

    return (
        <>
            {toyList}
        </>
    );
}
