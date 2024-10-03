import Priceable from "./Priceable"
import Specifications from "./Specifications"

export default interface Product extends Priceable {
    id: number
    name: string
    description: string
    brand: string
    model: string
    img: string
    videoReview: string
    score: number
    tags: string[]

    specifications: Specifications
}