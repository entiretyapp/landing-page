import styled from "styled-components"
import { Link } from "gatsby"

export const FooterContainer = styled.div`
  background-color: white; // #101522;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SocialMedia = styled.section`
  max-width: 1200px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #101522;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

export const SocialIcon = styled.img`
  height: 40px;
  width: auto;
  margin: 0 1rem 0 0;
`

export const WebsiteRights = styled.small`
  color: #101522;
  margin-bottom: 16px;
  font-family: "Ubuntu", sans-serif;

  a {
    text-decoration: none;
    color: #101522;
  }

  a:hover {
    color: #acefe2;
    transition: 0.2s all ease;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: #101522;
  font-size: 24px;

  :hover {
    color: #f6d933;
    transition: 0.2s all ease;
  }
`
