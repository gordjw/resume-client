import type { MetaFunction } from "@remix-run/node";
import { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { Main } from "~/components/main";
import { Nav } from "~/components/nav";
import { Product } from "~/components/product";

export const meta: MetaFunction = () => {
  return [
    { title: "Gordon Williamson - Senior technical product manager" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ params, }: LoaderFunctionArgs) {
  return json([{
    "client": "Propel Design",
    "role": "Senior Product Manager",
    "startYear": "2021",
    "endYear": "Current",
    "description": "I worked with multiple agency clients to coach product managers and senior executives, helping them to deliver better product visions, strategies and roadmaps."
  },
  {
    "client": "Digital Transformation Agency",
    "role": "Product Manager",
    "startYear": "2017",
    "endYear": "2021"
  },
  ])
}

export default function Index() {
  const products = useLoaderData<typeof loader>();

  return (
    <div className="min-h-svh">
      <Nav />
      <Main>
        <h1 className="col-span-full font-serif text-2xl">Teams I've worked with</h1>
        <Outlet />
      </Main>
    </div>
  );
}
