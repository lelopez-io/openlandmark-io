import React from 'react'
import styled from 'styled-components'

import { Section, Container } from 'components/global'

import Layout from 'components/common/layout/layout'
import Navigation from 'components/common/navigation/navigation'
import Footer from 'sections/footer'

import { Product } from 'components/Product'

import { getProduct } from 'components/Products'

let thisProduct = getProduct('Level 1: Email Service')

const ShopIndexPage = () => (
    <Layout>
        {/* <SEO title="Home" /> */}
        <Navigation />

        <StyledSection>
            <Container>
                <ShopWrapper>
                    <Product {...thisProduct} />
                </ShopWrapper>
            </Container>
        </StyledSection>
        <Footer />
    </Layout>
)

export default ShopIndexPage

const StyledSection = styled(Section)`
    padding-top: 160px;
`

const ShopWrapper = styled.div`
    margin-top: 6rem;
`
