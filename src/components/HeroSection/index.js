import React from "react"
// import { OutboundLink } from "gatsby-plugin-google-gtag"
import { Button } from "../ButtonElement"
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>Entirety</h1>
      <p>The modern entity management app for real estate investors</p>
      <div className="hero-btns">
        <Button
          fontBig
          big
          primary
          bold
          href="https://www.vacasa.com/unit/82659"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book A Stay
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
