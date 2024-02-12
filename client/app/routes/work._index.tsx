import { MetaFunction, json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Role from "~/components/role";
import { useRouteError } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "Gordon Williamson - Full stack developer" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export async function loader({ params, }: LoaderFunctionArgs) {
    const host = "http://localhost:8090"
    const endpoint = "/api/roles"
    let roles;

    try {
        console.log(host + endpoint)
        const response = await fetch(host + endpoint, {
            method: "GET",
            mode: "cors"
        })
        roles = await response.json()
    } catch (err) {
        console.log(err)
        return null
    }

    console.log(roles)

    return roles
}

export function ErrorBoundary() {
    const error = useRouteError();

    return (
        <div className="rounded shadow-lg p-6">
            <h2>Something went wrong</h2>
            <p>We couldn't complete this request.</p>
        </div>
    )
}


export default function Index() {
    const roles = useLoaderData<typeof loader>();
    const roleList: React.ReactElement[] = []
    Object.keys(roles).forEach((key: string) => {
        roleList.push(<Role key={key} role={roles[key]} />)
    })

    return (
        <>
            {roleList}
        </>
    );
}
