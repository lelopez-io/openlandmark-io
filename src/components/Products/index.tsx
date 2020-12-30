import React from 'react'

import { Product, ProductProps } from '../Product'

export interface ProductsProps {
    productsList: Array<ProductProps>
}

export const Products: React.FC<ProductsProps> = ({ productsList }) => {
    const productsListComponents = productsList.map((productData, index) => {
        return <Product key={index} {...productData} />
    })

    return <div>{productsListComponents}</div>
}

export const shopProducts: Array<ProductProps> = [
    {
        title: 'Level 1: Email Service',
        subtitle: 'A recurring payment for a simple automated email service',
        imgUrl: '/images/email.png',
        price_stripe: process.env.GATSBY_LEVEL_ONE_EMAIL_SERVICE_PRICE,
        price_total: '$16.23 monthly',
        price_service: '14.99',
        price_taxes: '1.24',
    },
]

export const getProduct = (title: string): ProductProps => {
    let result = shopProducts.filter((product) => product.title === title)[0]

    return result
}
