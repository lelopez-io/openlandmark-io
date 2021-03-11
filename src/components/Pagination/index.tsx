import React from 'react'

import { Link } from 'gatsby'

import { Nav, NavLocation } from './styled'

interface PaginationProps {
    pageContext: {
        previousPagePath: string
        nextPagePath: string
        humanPageNumber: number
        numberOfPages: number
    }
}

export const Pagination: React.FC<PaginationProps> = ({ pageContext }) => {
    const {
        previousPagePath,
        nextPagePath,
        humanPageNumber,
        numberOfPages,
    } = pageContext

    return (
        <Nav role="navigation">
            <div>
                {previousPagePath && (
                    <Link to={previousPagePath} rel="prev">
                        Previous
                    </Link>
                )}
            </div>
            {numberOfPages > 1 && (
                <NavLocation>
                    Page {humanPageNumber} of {numberOfPages}
                </NavLocation>
            )}
            <div>
                {nextPagePath && (
                    <Link to={nextPagePath} rel="next">
                        Next
                    </Link>
                )}
            </div>
        </Nav>
    )
}
