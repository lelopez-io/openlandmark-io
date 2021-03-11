import React, { useRef, useEffect } from 'react'

import { ModalWrapper, ModalContainer } from './styled'

import theme from 'utils/theme-config'

export interface ModalProps {
    active: boolean
    toggleActive?: () => void
}

export const Modal: React.FC<ModalProps> = ({
    active,
    toggleActive,
    children,
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const isSSR = typeof window === 'undefined'
    const htmlElement = !isSSR ? document.documentElement : null

    useEffect(() => {
        if (wrapperRef.current !== null && containerRef.current !== null) {
            if (active) {
                // do activation animation
                wrapperRef.current.style.visibility = 'visible'
                wrapperRef.current.style.backgroundColor = `${theme.color.background.black}`

                containerRef.current.style.marginTop = '100px'
                containerRef.current.style.opacity = '1'

                if (htmlElement) {
                    htmlElement.style.maxHeight = '100vh'
                    htmlElement.style.overflow = 'hidden'
                }
            } else {
                // do de-activation animation
                wrapperRef.current.style.backgroundColor = 'transparent'

                containerRef.current.style.marginTop = '0'
                containerRef.current.style.opacity = '0'

                if (htmlElement) {
                    htmlElement.style.maxHeight = 'none'
                    htmlElement.style.overflow = 'scroll'
                }

                // allow conatiner time to disapear before removing wrapper
                setTimeout(() => {
                    if (wrapperRef.current !== null) {
                        wrapperRef.current.style.visibility = 'hidden'
                    }
                }, 350)
            }
        }
    })

    return (
        <ModalWrapper ref={wrapperRef}>
            <ModalContainer ref={containerRef}>{children}</ModalContainer>
        </ModalWrapper>
    )
}
