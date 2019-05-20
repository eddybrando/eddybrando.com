import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "eddybrando.jpg" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          description="I’m a Peruvian developer, designer and entrepreneur specialised in web
          technologies."
          title="Hi, I'm Eddybrando."
          noTitleTemplate
        />
        <Img
          className="profile-picture"
          fixed={data.image.childImageSharp.fixed}
        />
        <p>
          I’m a Peruvian developer, designer and entrepreneur specialised in web
          technologies.
        </p>
      </Layout>
    )}
  />
)

export default IndexPage
