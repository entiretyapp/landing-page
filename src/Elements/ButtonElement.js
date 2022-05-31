import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-gtag"

export const Button = styled(OutboundLink)`
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#F6D51A" : "#F6E47C")};
  padding: ${({ big }) => (big ? "16px 48px" : "12px 16px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  outline: none;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    background: ${({ primary }) => (primary ? "#F6E47C" : "#F6D51A")};
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
