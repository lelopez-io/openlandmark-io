import React from 'react'

import { Wrapper, WrapperProps } from './styled'

export { ContentContainer } from './styled'

export interface SectionSplitProps extends WrapperProps {
    children?: React.ReactNode
}

export const SectionSplit: React.FC<SectionSplitProps> = ({
    children,
    reverseVerticalOrder,
}) => {
    return (
        <Wrapper reverseVerticalOrder={reverseVerticalOrder}>
            {children}
        </Wrapper>
    )
}
