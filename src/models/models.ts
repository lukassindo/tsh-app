type Product = {
    active: boolean,
    description: string,
    id?: number,
    image: string,
    name: string,
    promo: boolean,
    rating: number
}

type Filters = {
    active: boolean,
    promo: boolean,
    search: string
}

type Pagination = {
    data: Product[],
    setData: (data:Product[]) => void,
    itemsPerPage: number
}

type ProductsArray = Product [][];

type ProductsPayLoad = {
   results:  Product[],
   errorMessage?: string
}

interface ContextData {
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    setPromo: React.Dispatch<React.SetStateAction<boolean>>,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
}

export type {ProductsPayLoad, Product, Filters, Pagination, ProductsArray, ContextData}