import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactMeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <Layout
        headerTitle={{ highlight: "Contact", append: " me" }}
        mainContainerClass="main-container--full-height"
        nav={[
          { label: "Home", link: "/" },
          { label: "My work", link: "/my-work" },
        ]}
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
        <a
          href="#"
          onClick={this.handleSubmit.bind(this)}
          className="link-block"
        >
          Send {this.state.count}
        </a>
      </Layout>
    )
  }
}

export default ContactMeComponent
