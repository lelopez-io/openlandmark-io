import React from 'react'

import { ProductCard} from './styled'

export interface ProductProps {
    title: string
    subtitle: string
    imgUrl: string

    price_stripe?: string
    price_total: string
    price_service: string
    price_taxes: string
    price_fees?: string
}

export const Product: React.FC<ProductProps> = ({title,subtitle,imgUrl,price_stripe,price_service,price_taxes,price_fees}) => {

    return <ProductCard>{title}</ProductCard>

}