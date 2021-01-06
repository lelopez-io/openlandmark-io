import React from 'react'
import { shortTitle } from '../../utils/site-config'

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
        serviceUrl: '/sign-up/level-one-email-service',
        imgUrl: '/images/email.png',
        price_stripe: process.env.GATSBY_LEVEL_ONE_EMAIL_SERVICE_PRICE,
        price_total: '$16.23 monthly',
        price_service: '14.99',
        price_taxes: '1.24',
    },
    {
        title: 'Level 1: Web Hosting',
        subtitle: 'A recurring payment for simple web hosting of a site.',
        serviceUrl: 'level-one-web-hosting',
        imgUrl: '/images/cloud.png',
        price_stripe: process.env.GATSBY_SIMPLE_HOSTING_PRICE,
        price_total: '$16.23 monthly',
        price_service: '14.99',
        price_taxes: '1.24',
    },
    {
        title: 'Level 1: Web Support',
        subtitle:
            'A recurring payment for web support of an E-Commerce website',
        serviceUrl: 'level-one-web-support',
        imgUrl: '/images/code.png',
        price_stripe: process.env.GATSBY_LEVEL_ONE_WEB_SUPPORT_PRICE,
        price_total: '$167.37monthly',
        price_service: '149.99',
        price_taxes: '12.37',
        price_fees: '5.01',
    },
    {
        title: 'Level 2: Web Support',
        subtitle:
            'A recurring payment for web support of an E-Commerce website',
        serviceUrl: 'level-two-web-support',
        imgUrl: '/images/code.png',
        price_stripe: process.env.GATSBY_LEVEL_TWO_WEB_SUPPORT_PRICE,
        price_total: '$278.76monthly',
        price_service: '250.00',
        price_taxes: '20.63',
        price_fees: '8.13',
    },
]
// export const getProduct = shopProducts.filter(Product)
