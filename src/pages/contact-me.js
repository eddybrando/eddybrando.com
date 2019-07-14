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
    <div className="form-field">
      <label>Name</label>
      <input className="field" />
    </div>
    <div className="form-field">
      <label>Company</label>
      <input className="field" />
    </div>
    <div className="form-field">
      <label>E-mail address</label>
      <input className="field" />
    </div>
    <div className="form-field">
      <label>Message</label>
      <textarea className="field" rows="8" />
    </div>
    <a href="#" class="link-block">
      Send
    </a>
  </Layout>
)

export default ContactMe
