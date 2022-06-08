import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa"
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  // SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements"
// import { OutboundLink } from "gatsby-plugin-google-gtag"

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          {/* <SocialLogo to="/">Entirety</SocialLogo> */}
          <WebsiteRights>
            Entirety &copy; {new Date().getFullYear()}
          </WebsiteRights>
          <SocialIcons>
            {/* <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </SocialIconLink> */}
            {/* <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialIconLink> */}
            {/* <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </SocialIconLink> */}
            <SocialIconLink
              href="https://twitter.com/entiretyapp"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIconLink>
            {/* <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Linkedin"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialIconLink> */}
            <SocialIconLink
              href="mailto:hello@entirety.app"
              target="_blank"
              aria-label="Email"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
