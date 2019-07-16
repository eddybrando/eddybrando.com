import React, { Component } from "react"
import axios from "axios"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactMeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      count: 0,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ count: this.state.count + 1 })
    axios
      .post(`${process.env.GATSBY_API_URL}/contact`, { captchaToken: 123 })
      .then(res => {
        console.log(res)
      })
      .catch(rej => {
        console.error(rej)
      })
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
        <form className="contact-form">
          <div className="form-field">
            <label>Name</label>
            <input
              className="field"
              value={this.state.name}
              onChange={this.handleChange}
            />
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
          <a href="#" onClick={this.handleSubmit} className="link-block">
            Send {this.state.count} {this.state.name}
          </a>
        </form>
      </Layout>
    )
  }
}

export default ContactMeComponent
