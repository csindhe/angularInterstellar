export interface product {
    id: number,
    name: string,
    description?: string,
    price?: number;
}

export interface shipping {
    type: string,
    price: number
}