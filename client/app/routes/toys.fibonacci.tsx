import type { ClientLoaderFunctionArgs } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ShowcaseTitle } from "~/components/showcase/showcase-title";

export const meta: MetaFunction = () => {
    return [
        { title: "Gordon Williamson - Full stack developer" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export async function clientLoader() {
    const n = 4
    const fib = await new Fibonacci(n).calculate()
    console.log(`Fibonacci(${n}) is ${fib}`)
    return { "n": n, "fib": fib };
}

clientLoader.hydrate = true;

export function HydrateFallback() {
    return (
        <>
            <h2>Fibonacci calculator</h2>

            <p id="results">Calculating...</p>
        </>
    );
}

export default function Index() {
    let n = 4
    const data = useLoaderData<typeof clientLoader>();
    const handleReloadMouseEvent = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        clientLoader()
    }
    console.log(data)
    return (
        <>
            {/* <ShowcaseTitle title="Fibonacci calculator" /> */}

            <p id="results">Fibonacci({data.n}) = {data.fib}</p>

            <button value="Recalculate" onClick={handleReloadMouseEvent}>Recalculate</button>
        </>
    );
}

class Fibonacci {
    n: number;
    fs: Array<number>

    constructor(n: number) {
        this.n = n
        this.fs = [0, 1]
    }

    async calculate() {
        try {
            return await this.compute(this.n)
        } catch({error}: any) {
            console.log(error.message)
        }
    }

    async compute(n: number) {
        const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

        if( n < 0 ) {
            throw new Error("Invalid fibonacci number")
        }
        if( n <= 1 ) {
            return this.fs[n]
        }
        for( let i = 2; i < n; i++ ) {
            this.fs[i] = this.fs[i-1] + this.fs[i-2]
            console.log(`${i} = ${this.fs[i]}`)
            // await sleep(1000)
        }
        return this.fs[this.fs.length-1]
    }
}

async function run() {
    const n = 4
    const fib = await new Fibonacci(n).calculate()
    console.log(`Fibonacci(${n}) is ${fib}`)
}