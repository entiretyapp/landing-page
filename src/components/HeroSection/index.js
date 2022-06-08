import React from "react"
import ContactForm from "../ContactForm"

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
          Sign up with your email address to get notified when the app launches!
        </p>
        <ContactForm />
      </div>
    </div>
  )
}

export default HeroSection
