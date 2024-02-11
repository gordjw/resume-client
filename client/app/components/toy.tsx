import { Link } from "@remix-run/react"

export function Toy({ toy }: any) {
    return (
        <div className="col-span-2 p-6 rounded mix-blend-luminosity bg-gradient-to-tr from-yellow-400 to-transparent shadow-lg">
            <h1 className="font-serif text-xl ">{toy.name}</h1>
            <p>{toy.type}</p>
            <p>{toy.description}</p>
            <Link to={toy.url}>View {toy.name}</Link>
        </div>
    )
}