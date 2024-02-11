import { Main } from "~/components/main";
import { Nav } from "~/components/nav";
import { MetaFunction, json, LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Gordon Williamson - Full stack developer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-svh">
      <Nav />
      <Main>
        <h1 className="col-span-full font-serif text-2xl">Toys</h1>
        <Outlet />
      </Main>
    </div>
  );
}
