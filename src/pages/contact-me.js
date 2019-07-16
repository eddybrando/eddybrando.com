import React, { Component } from "react"
import axios from "axios"
import qs from "qs"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactMeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      company: "",
      email: "",
      message: "",
      name: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { company, email, message, name } = this.state
    const payload = { company, email, message, name }

    axios
      .post(
        `${process.env.GATSBY_API_URL}/contact`,
        qs.stringify({ captchaToken: 123, ...payload })
      )
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
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="form-field">
            <label>Company</label>
            <input
              className="field"
              name="company"
              onChange={this.handleChange}
              value={this.state.company}
            />
          </div>
          <div className="form-field">
            <label>E-mail address</label>
            <input
              className="field"
              name="email"
              onChange={this.handleChange}
              type="email"
              value={this.state.email}
            />
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea
              className="field"
              name="message"
              onChange={this.handleChange}
              rows="8"
              value={this.state.message}
            />
          </div>
          <a href="#" onClick={this.handleSubmit} className="link-block">
            Send
          </a>
        </form>
      </Layout>
    )
  }
}

export default ContactMeComponent
