import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import LinkText from "../components/link-text";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jello from "react-reveal/Jello"

export const PureIndexPage = ({ data }) => (
  <Layout
    headerTitle={{
      prepend: "Hi, I'm ",
      highlight: "Eddybrando",
    }}
    mainContainerClass="main-container--welcome"
  >
    <SEO
      description="I’m a Peruvian developer, designer and entrepreneur specialised in web
          technologies."
      title="Hi, I'm Eddybrando Vásquez"
      noTitleTemplate
    />

    <section className="profile-picture-container">
      <Jello>
        <Img
          className="profile-picture"
          fixed={data.image.childImageSharp.fixed}
        />
      </Jello>
    </section>

    <section className="description">
      <p>
        I’m a Peruvian developer, designer and entrepreneur specialised in web
        technologies.
      </p>
    </section>

    <nav className="nav">
      <LinkText label="My work" to="/my-work" style={{ marginRight: 40 }} />
      <LinkText label="Contact me" to="/contact-me" style={{ marginRight: 40 }} />
    </nav>
  </Layout>
)

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
    render={data => <PureIndexPage data={data} />}
  />
)

export default IndexPage
