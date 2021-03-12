import React from 'react'

import { Wrapper, WrapperProps } from './styled'

export { ContentContainer } from './styled'

interface GalleryChildProps {
    image: string
    imageAlt: string
    text?: string
}

export interface GalleryChildrenProps {
    galleryChildren: Array<GalleryChildProps>
}

export interface SectionGalleryProps extends WrapperProps {
    children?: React.ReactNode
}

export const SectionGallery: React.FC<SectionGalleryProps> = ({
    children,
    rowHeight,
}) => {
    return <Wrapper rowHeight={rowHeight}>{children}</Wrapper>
}
