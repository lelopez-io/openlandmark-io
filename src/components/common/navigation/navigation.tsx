import React, { Component } from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import { Menu, X } from 'react-feather'

import { Container } from 'components/global'
import {
    Nav,
    NavItem,
    Brand,
    StyledContainer,
    NavListWrapper,
    MobileMenu,
    Mobile,
    ActionsContainer,
} from './style'

const NAV_ITEMS = [``]

export default class Navigation extends Component {
    state = {
        mobileMenuOpen: false,
        hasScrolled: false,
    }

    componentDidMount() {
        window.addEventListener(`scroll`, this.handleScroll)
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 32) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false })
        }
    }

    toggleMobileMenu = () => {
        this.setState((prevState) => {
            return { mobileMenuOpen: !prevState.mobileMenuOpen }
        })
    }

    closeMobileMenu = () => {
        if (this.state.mobileMenuOpen) {
            this.setState({ mobileMenuOpen: false })
        }
    }

    getNavAnchorLink = (item) => (
        <AnchorLink
            href={`#${item.toLowerCase()}`}
            onClick={this.closeMobileMenu}
        >
            {item}
        </AnchorLink>
    )

    getNavList = ({ mobile = false }) => (
        <NavListWrapper mobile={mobile}>
            <Scrollspy
                items={NAV_ITEMS.map((item) => item.toLowerCase())}
                currentClassName="active"
                mobile={mobile}
                offset={-64}
            >
                {NAV_ITEMS.map((navItem) => (
                    <NavItem key={navItem}>
                        {this.getNavAnchorLink(navItem)}
                    </NavItem>
                ))}
            </Scrollspy>
        </NavListWrapper>
    )

    render() {
        const { mobileMenuOpen } = this.state

        return (
            <Nav {...this.props} scrolled={this.state.hasScrolled}>
                <StyledContainer>
                    <Brand>
                        <Link
                            className="has-text-primary-dark"
                            to="/"
                            onClick={this.closeMobileMenu}
                            style={{ textDecoration: `none` }}
                        >
                            Openlandmark
                        </Link>
                    </Brand>

                    <ActionsContainer>
                        <StyledLink className="button is-primary" to="/sign-up">
                            Sign Up
                        </StyledLink>
                    </ActionsContainer>
                </StyledContainer>
            </Nav>
        )
    }
}

const StyledLink = styled(Link)`
    text-transform: uppercase;
    font-size: 12px;
`
