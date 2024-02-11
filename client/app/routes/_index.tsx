import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero";
import { Main } from "~/components/main";
import { Nav } from "~/components/nav";
import { Link, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Gordon Williamson - Full stack developer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="min-h-svh">
        <Nav />
        <Main>
          <Hero />
        </Main>
      </div>
    </>
  );
}
