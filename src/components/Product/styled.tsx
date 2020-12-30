import styled from 'styled-components'

export const ProductCard = styled.form`
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
        0 5px 15px rgba(0, 0, 0, 0.07);
    width: 47%;
    max-width: 100%;
    margin: 0 auto 20px;
    background-color: #fff;
    border-radius: 4px;
`

export const ProductContent = styled.div`
    margin-top: 3rem;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const ProductHeader = styled.h1`
    margin-bottom: 10px;
`

export const ProductImage = styled.img`
    max-width: 50%;
    margin: 1.5em 0;
`

export const ProductButton = styled.button`
    background-color: #343434;
    color: #fff;
    width: 100%;
    padding: 0.75rem 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`

export const ProductPriceInfo = styled.div`
    &:hover .show-on-hover {
        display: block;
    }

    //center ProductPriceBreakdown relative to this
    max-height: 21px;
    position: relative;
    width: 100%;
`

export const ProductPriceIcon = styled.span``

export const ProductPriceBreakdown = styled.div`
    display: none;

    line-height: 1.25rem;
    width: 220px;
    background-color: #343434;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 15px 0;

    //Center element against bottom of parent
    position: absolute;
    bottom: 0px;
    right: 0;
    left: 0;
    margin: 0 auto;
`
