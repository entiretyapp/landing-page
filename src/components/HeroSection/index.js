import React from "react"
// import { OutboundLink } from "gatsby-plugin-google-gtag"
import { Button } from "../../Elements/ButtonElement"
import { Form, Email, Submit } from "../../Elements/FormElement"

import "./HeroSection.css"

const HeroSection = () => {
  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <div className="hero-container">
      <h1>Entirety</h1>
      <div className="divider" />
      <p>The modern entity management app for real estate investors</p>
      <div className="hero-actions">
        <p>
          Sign up with your email address to participate in our upcoming beta
          group!
        </p>
        <Form
          onSubmit={onSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Email type="email" placeholder="Email" />
          <Submit type="submit">Join waitlist</Submit>
        </Form>
      </div>
    </div>
  )
}

export default HeroSection
