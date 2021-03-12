import React from 'react'

import { SectionTitle, SectionWrapper } from './styled'

interface SectionProps {
    centerTitle?: boolean
    title?: string
    id?: string
}

export const Section: React.FC<SectionProps> = ({
    centerTitle,
    title,
    children,
    id,
}) => {
    return (
        <SectionWrapper id={id}>
            {title && <SectionTitle center={centerTitle}>{title}</SectionTitle>}
            {children}
        </SectionWrapper>
    )
}
