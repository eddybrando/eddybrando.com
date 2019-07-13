import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const companies = [
    {
      company: "IBM",
      date: "2019 - Present",
      role: "Web developer, UI/UX designer",
    },
    {
      company: "KICKZ",
      date: "2018 - 2019",
      role: "Web developer, architect, UI/UX designer",
    },
    { company: "IBM", date: "2016 - 2018", role: "Web developer" },
    {
      company: "Body Change",
      date: "2014 - 2015",
      role: "Web developer, UI designer, project manager",
    },
    {
      company: "Peruvian Embassy in Ecuador",
      date: "2008 - 2015",
      role: "Web developer, UI/UX designer, graphic designer",
    },
  ]

  return (
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
          I started coding around 2003 at age 13 and drafted my first web
          designs when I was 14.
        </p>

        <p>
          Back then, my tech stack consisted of HTML 4, CSS 2 and Macromedia
          Flash 7, along with the occasional JavaScript snippet.
        </p>

        <p>
          My tools of choice were Macromedia Dreamweaver and Microsoft FrontPage
          for code editing, and Yahoo! GeoCities or the free .tk domains host
          for hosting.
        </p>
      </section>

      <section>
        <h2>Some companies I've worked at</h2>
      </section>

      {companies.map(({ company, date, role }, index) => (
        <div className="work-company-block" key={index}>
          <div>Logo</div>
          <div>
            <h3>{company}</h3>
            <div className="font-small">{role}</div>
          </div>
          <div className="col-date">{date}</div>
        </div>
      ))}
    </Layout>
  )
}

export default SecondPage
