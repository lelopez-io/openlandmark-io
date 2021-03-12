import React from 'react'

import { Wrapper, WrapperProps } from './styled'

export { ContentContainer } from './styled'

interface GalleryChildProps {
    image: string
    imageAlt: string
    text?: string
    link?: string
}

export interface GalleryChildrenProps {
    galleryChildren: Array<GalleryChildProps>
}

export interface SectionGalleryFlexProps extends WrapperProps {
    children?: React.ReactNode
}

export const SectionGalleryFlex: React.FC<SectionGalleryFlexProps> = ({
    children,
    rowHeight,
}) => {
    return (
        <Wrapper className="flex-cc" rowHeight={rowHeight}>
            {children}
        </Wrapper>
    )
}
