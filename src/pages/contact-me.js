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
      errors: {},
      message: "",
      name: "",
      lastValues: {
        company: "",
        email: "",
        message: "",
        name: "",
      },
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

    this.setState({ errors: {}, lastValues: { company, email, message, name } })

    axios
      .post(
        `${process.env.GATSBY_API_URL}/contact`,
        qs.stringify({ captchaToken: 123, ...payload })
      )
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        if (error.response && error.response.data) {
          this.setState({ errors: error.response.data })
        }
      })
  }

  render() {
    const { errors, lastValues } = this.state

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
              className={`field ${
                errors.name && lastValues.name === this.state.name
                  ? "has-error"
                  : ""
              }`}
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            {errors.name && lastValues.name === this.state.name && (
              <div className="field-error-message">{errors.name[0]}</div>
            )}
          </div>
          <div className="form-field">
            <label>Company</label>
            <input
              className={`field ${
                errors.company && lastValues.company === this.state.company
                  ? "has-error"
                  : ""
              }`}
              name="company"
              onChange={this.handleChange}
              value={this.state.company}
            />
            {errors.company && lastValues.company === this.state.company && (
              <div className="field-error-message">{errors.company[0]}</div>
            )}
          </div>
          <div className="form-field">
            <label>E-mail address</label>
            <input
              className={`field ${
                errors.email && lastValues.email === this.state.email
                  ? "has-error"
                  : ""
              }`}
              name="email"
              onChange={this.handleChange}
              type="email"
              value={this.state.email}
            />
            {errors.email && lastValues.email === this.state.email && (
              <div className="field-error-message">{errors.email[0]}</div>
            )}
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea
              className={`field ${
                errors.message && lastValues.message === this.state.message
                  ? "has-error"
                  : ""
              }`}
              name="message"
              onChange={this.handleChange}
              rows="8"
              value={this.state.message}
            />
            {errors.message && lastValues.message === this.state.message && (
              <div className="field-error-message">{errors.message[0]}</div>
            )}
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
