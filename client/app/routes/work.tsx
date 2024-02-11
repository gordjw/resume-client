import type { MetaFunction } from "@remix-run/node";
import { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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
    <div className="bg-gradient-to-br from-sky-500 to-indigo-500 min-h-svh">
      <Nav />
      <Main>

        {
          products.map(product => {
            return (<Product product={product} />)
          })
        }

      </Main>
    </div>
  );
}
