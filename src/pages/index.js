import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      I’m a Peruvian developer, designer and entrepreneur specialised in web
      technologies.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
