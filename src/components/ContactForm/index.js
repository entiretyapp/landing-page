import React from "react"
import { Form, Email, Submit } from "../../Elements/FormElement"

const ContactForm = () => {
  return (
    <div>
      <form
        action="https://getform.io/f/1166a10c-65d5-44a5-add7-ea062dc44747"
        method="POST"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-email"
        />
        <button type="submit" className="btn-submit">
          Join Waitlist
        </button>
      </form>
    </div>
  )
}

export default ContactForm
