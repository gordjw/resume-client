import type { ClientLoaderFunctionArgs } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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
            <h2>Starfield</h2>

            <p id="results">Loading...</p>
        </>
    );
}

export default function Index() {
    const data = useLoaderData<typeof clientLoader>();
    return (
        <>
            <h2>Starfield</h2>

            <div className="rounded bg-black col-span-full shadow-lg ">
                <canvas id="sky" width="800px" height="500px"></canvas>
            </div>

            <script src="/scripts/starfield.js" type="text/javascript"></script>
        </>
    );
}

