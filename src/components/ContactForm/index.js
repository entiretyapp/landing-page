import React from "react"
import { Form, Email, Submit } from "../../Elements/FormElement"

const ContactForm = () => {
  const onSubmit = event => {
    event.preventDefault()
  }
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Email
          type="email"
          placeholder="Email"
          className="input-email"
          id="input"
        />
        <Submit type="submit" className="btn-submit">
          Join Waitlist
        </Submit>
      </Form>
    </div>
  )
}

export default ContactForm
