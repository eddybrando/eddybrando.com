import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "eddybrando.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        <Img fluid={data.image.childImageSharp.fluid} />
        <p>
          I’m a Peruvian developer, designer and entrepreneur specialised in web
          technologies.
        </p>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )}
  />
)

export default IndexPage
