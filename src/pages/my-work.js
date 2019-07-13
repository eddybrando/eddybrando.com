import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout
    headerTitle={{ prepend: "My ", highlight: "work" }}
    mainContainerClass="main-container--full-height"
    nav={[{ label: "Home", link: "/" }]}
  >
    <SEO
      description="This is my work as a developer, designer and entrepreneur specialised in web
          technologies."
      title="My work"
    />

    <section className="how-it-began">
      <h2>How it began</h2>
      <p>
        I started coding around 2003 at age 13 and drafted my first web designs
        when I was 14.
      </p>

      <p>
        Back then, my tech stack was HTML 4, CSS 2 and Macromedia Flash 7, along
        with the occasional JavaScript snippet.
      </p>

      <p>
        My tools of choice were Macromedia Dreamweaver and Microsoft FrontPage
        for code editing, and Yahoo! GeoCities or the free .tk domains host for
        hosting.
      </p>
    </section>

    <section>
      <h2>Some companies I've worked for</h2>
    </section>
  </Layout>
)

export default SecondPage
