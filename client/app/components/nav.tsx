import { Link } from "@remix-run/react"

export function Nav() {
    return (
        <nav className="fixed w-full backdrop-blur-md">
            <div className="max-w-6xl mx-auto my-8 text-white text-xl flex justify-between">
                <Link to="/" className="font-bold uppercase">Gordon Williamson</Link>
                <div className="flex justify-end gap-8">
                    <Link to="/work">Work</Link>
                    <Link to="/toys">Play</Link>
                </div>
            </div>
        </nav>
    )
}