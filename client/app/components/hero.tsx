
export function Hero() {
    const backgroundHero = "/images/bg-1.jpg"
    return (
        <>
            <div className="col-start-1 col-span-2 p-6 rounded-3xl shadow-lg">
                <p className="font-serif text-2xl">Hi, I'm Gordon. </p>
                <p>I'm a product manager and full-stack developer who loves to build digital services that help people.</p>
            </div>
            <div className="col-start-3">
                <img src="/images/bg-2.jpg" className="rounded-full shadow-lg border-solid border-x-8 border-y-2 border-transparent mix-blend-luminosity"/>
            </div>
        </>
    )
}
