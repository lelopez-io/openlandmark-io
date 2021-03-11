import styled from 'styled-components'

export const FormWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 2rem;
`

export const FormContainer = styled.form`
    margin: 0;
    height: 100%;
    width: 100%;

    & input,
    textarea {
        width: 100%;
        padding: 0.5rem;

        margin: 0.25rem 0;

        background-color: #ffffff26;

        border: none;

        outline: none;
        &:focus {
            background-color: #ffffff46;
        }
    }

    textarea {
        flex: 1;
        min-height: 180px;
        resize: none;
    }
`

export const FormSubmitContainer = styled.div`
    width: 100%;
    margin-top: 0.75rem;
`

export const FormSubmit = styled.button`
    padding: 0.5rem;
    background-color: #ffffff46;
    min-width: 50%;
`
