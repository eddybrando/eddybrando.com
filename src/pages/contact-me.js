import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactMe = () => (
  <Layout
    headerTitle={{ highlight: "Contact", append: " me" }}
    mainContainerClass="main-container--full-height"
    nav={[{ label: "Home", link: "/" }, { label: "My work", link: "/my-work" }]}
  >
    <SEO
      description="Get in touch with me by using this awesome online form! (It's free!)"
      title="Contact me"
    />
    Contact form
  </Layout>
)

export default ContactMe
