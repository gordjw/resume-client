export function Product({ product }: any) {
    return (
        <div className="col-span-2 p-6 rounded shadow-lg">
            <h1 className="font-serif text-xl ">{product.client}</h1>
            <p className="mb-4">{product.startYear} - {product.endYear}</p>
            <p>{product.description}</p>
            
        </div>
    )
}