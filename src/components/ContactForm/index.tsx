import React, { useState } from 'react'
import { useFormik } from 'formik'

import {
    FormWrapper,
    FormContainer,
    FormSubmitContainer,
    FormSubmit,
} from './styled'

const validate = (values: any) => {
    const errors = {} as any

    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }

    if (!values.message) {
        errors.message = 'Required'
    }

    return errors
}

export const ContactForm: React.FC = () => {
    const [posted, setPosted] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate,
        onSubmit: (values) => {
            let form_url = process.env.GATSBY_CONTACT_FORM_URL ?? ''

            try {
                if (form_url !== '') {
                    fetch(form_url, {
                        method: 'POST',
                        headers: new Headers({
                            'Content-Type': 'application/json',
                        }),
                        body: JSON.stringify(values),
                    })
                        .then((response) => {
                            let data
                            try {
                                data = response.json()
                            } catch (e) {
                                console.log('response not json')
                                data = ''
                            } finally {
                                return data
                            }
                        })
                        .then((data) => {
                            if (data.message == 'success') {
                                setPosted(true)
                            }
                        })
                } else {
                    throw new Error(`missing 'form_url'`)
                }
            } catch (e) {
                console.log('failed to post form: ', e)
            }
        },
    })

    return (
        <FormWrapper>
            {posted ? (
                <div>
                    Thank you for reaching out, we'll get back to you asap!
                </div>
            ) : (
                <FormContainer
                    id="contact-form"
                    className="flex-cs flex-column"
                    onSubmit={formik.handleSubmit}
                >
                    <label htmlFor="name" className="visually-hidden">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div style={{ fontSize: '.8em' }}>
                            * {formik.errors.name.toLowerCase()}
                        </div>
                    ) : null}

                    <label htmlFor="email" className="visually-hidden">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div style={{ fontSize: '.8em' }}>
                            * {formik.errors.email.toLowerCase()}
                        </div>
                    ) : null}

                    <label htmlFor="message" className="visually-hidden">
                        Message
                    </label>
                    <textarea
                        form="contact-form"
                        id="message"
                        name="message"
                        placeholder="Message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div style={{ fontSize: '.8em' }}>
                            * {formik.errors.message.toLowerCase()}
                        </div>
                    ) : null}
                    <FormSubmitContainer className="flex-cc">
                        <FormSubmit type="submit">Submit</FormSubmit>
                    </FormSubmitContainer>
                </FormContainer>
            )}
        </FormWrapper>
    )
}
