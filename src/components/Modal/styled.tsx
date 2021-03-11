import styled from 'styled-components'

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 5;

    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
`

export const ModalContainer = styled.div`
    position: relative;
    max-width: 600px;

    padding: 35px;
    text-align: center;

    margin: 0 auto;
    opacity: 0;
    transition: margin-top 0.25s ease-in-out, opacity 0.2s ease-in-out;
`
