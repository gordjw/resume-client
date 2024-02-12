import { Link } from "@remix-run/react"

export default function Role({ role }: any) {
    return (
        <div className="col-span-2 p-6 rounded shadow-lg">
            <h1 className="font-serif text-xl ">{role.title}</h1>
            <p>{role.client}</p>
            <p>{role.description}</p>
            <Link to={role.id}>View more</Link>
        </div>
    )
}