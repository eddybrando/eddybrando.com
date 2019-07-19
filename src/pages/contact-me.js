import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactMeComponent = () => (
  <Layout
    headerTitle={{ highlight: "Contact", append: " me" }}
    mainContainerClass="main-container--centered"
    nav={[{ label: "Home", link: "/" }, { label: "My work", link: "/my-work" }]}
  >
    <SEO
      description="Get in touch with me by using one of this awesome platforms! (It's free!)"
      title="Contact me"
    />
    <div>
      <p>
        You can always send me a message over{" "}
        <a
          className="link-block"
          href="https://www.linkedin.com/in/eddybrandovasquez/"
          target="_blank"
        >
          LinkedIn
        </a>
        . I do my best to try and answer ASAP.
      </p>
      <p>
        In case you're feeling German today, you can also reach over{" "}
        <a
          className="link-block"
          href="https://www.xing.com/profile/Eddybrando_Vasquez/"
          target="_blank"
        >
          Xing
        </a>
        . I don't check it as often tho.
      </p>
    </div>
  </Layout>
)

export default ContactMeComponent
