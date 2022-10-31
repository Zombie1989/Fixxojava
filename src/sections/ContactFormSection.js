import React, { useState } from 'react'

const ContactFormSection = () => {

    const [ contactForm, setContactForm ] = useState({name: '', email: '', comment: ''})
    const [ formErrors, setFormErrors ] = useState({}) 
    const [ canSubmit, setCanSubmit ] = useState(false)


    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]:value})
    }

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //validates email
        const regex_name = /^[a-z ,.'-]+$/i //validates name

        if (!values.name)
            errors.name = "You must enter a name"
        else if (!regex_name.test(values.name))
            errors.name = "You need to use a valid name"

        if (!values.email)
            errors.email ="You must enter a valid email"
        else if(!regex_email.test(values.email))
            errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"

        if (!values.comment)
            errors.comment ="You must enter a comment"
        else if (values.comment.length < 10)
            errors.comment = "Your comment need atleast 10 letters"


        if (Object.keys(errors).length === 0)
            setCanSubmit(true)
        else 
            setCanSubmit(false)

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }

  return (
    <section className="contact-form">
        <div className="container">
            <h2>Come in Contact with Us</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <input id="name" type="text" placeholder="Your name" value={contactForm.name} onChange={handleChange} />
                    <div className="errorMessage">{formErrors.name}</div>
                </div>
                <div>
                    <input id="email" type="email" placeholder="Your e-mail" value={contactForm.email} onChange={handleChange} />
                    <div className="errorMessage">{formErrors.email}</div>
                </div>
                <div className="text-area">
                    <textarea id="comment" type="text" placeholder="comments" value={contactForm.comment} onChange={handleChange} ></textarea>
                    <div className="errorMessage">{formErrors.comment}</div>
                </div>
                <div className="form-btn">
                    <button type="submit" className="btn-red">Post Comments</button>
                </div>
            </form>
        </div>

    </section>
  )
}

export default ContactFormSection