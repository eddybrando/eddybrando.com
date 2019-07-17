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
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Layout
        headerTitle={{
          prepend: "Hi, I'm ",
          highlight: "Eddybrando",
          append: ".",
        }}
        mainContainerClass="main-container--welcome"
      >
        <SEO
          description="I’m a Peruvian developer, designer and entrepreneur specialised in web
          technologies."
          title="Hi, I'm Eddybrando."
          noTitleTemplate
        />

        <section className="profile-picture-container">
          <Img
            className="profile-picture"
            fixed={data.image.childImageSharp.fixed}
          />
        </section>

        <section className="description">
          <p>
            I’m a Peruvian developer, designer and entrepreneur specialised in
            web technologies.
          </p>
        </section>

        <nav className="nav">
          <Link
            className="link-block"
            style={{ marginRight: 40 }}
            to="/my-work"
          >
            My work
          </Link>
          <Link className="link-block" to="/contact-me">
            Contact me
          </Link>
        </nav>
      </Layout>
    )}
  />
)

export default IndexPage
