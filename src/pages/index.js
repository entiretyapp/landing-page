import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

import HeroSection from "../components/HeroSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
  </Layout>
)

export default IndexPage
