import styled from 'styled-components'

export const Nav = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4vw 0 0;

    & a {
        display: inline-block;
        padding: 10px 15px;
        border: var(--color-border) 1px solid;
        color: ${(props) => props.theme.color.secondary};
        text-decoration: none;

        line-height: 1em;
        border-radius: var(--radius);
    }
`

export const NavLocation = styled.div`
    position: absolute;
    left: 50%;
    width: 100px;
    margin-left: -50px;
    text-align: center;
    color: ${(props) => props.theme.color.black.lightest};
`
