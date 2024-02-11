export function Product({ product }: any) {
    return (
        <div className="col-span-2 p-6 rounded mix-blend-luminosity bg-gradient-to-tr from-yellow-400 to-transparent shadow-lg">
            <h1 className="font-serif text-xl ">{product.client}</h1>
            <p>{product.startYear} - {product.endYear}</p>
            <p>{product.description}</p>
            
        </div>
    )
}