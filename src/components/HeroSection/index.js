import React from "react"
import ContactForm from "../ContactForm"

import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>Entirety</h1>
      <div className="divider" />
      <p>The modern all-in-one entity management system for real estate investors</p>
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
