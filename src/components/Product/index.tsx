import React from 'react'
import { Link } from 'gatsby'

import {
    ProductCard,
    ProductHeader,
    ProductImage,
    ProductButton,
    ProductContent,
    ProductPriceInfo,
    ProductPriceIcon,
    ProductPriceBreakdown,
} from './styled'

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

export const Product: React.FC<ProductProps> = ({
    title,
    subtitle,
    imgUrl,
    price_stripe,
    price_service,
    price_taxes,
    price_fees,
    price_total,
}) => {
    return (
        <ProductCard>
            <ProductContent>
                <ProductHeader>{title}</ProductHeader>
                <p>{subtitle}</p>
                <Link to="/sign-up/level-one-email-service">
                    <ProductImage src={imgUrl} />
                </Link>

                <p>{price_total}</p>

                <ProductPriceInfo>
                    <ProductPriceIcon>&#9432;</ProductPriceIcon>
                    <ProductPriceBreakdown className="show-on-hover">
                        <p>${price_service} service</p>
                        <p>+${price_taxes} taxes</p>
                    </ProductPriceBreakdown>
                </ProductPriceInfo>
            </ProductContent>

            <ProductButton type="submit" role="Link">
                Subscribe
            </ProductButton>
        </ProductCard>
    )
}
