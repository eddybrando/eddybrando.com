import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const companies = [
    {
      company: "IBM",
      date: "2019 - Present",
      logoImg: "logoIbm",
      role: "Web developer, UI/UX designer",
    },
    {
      company: "KICKZ",
      date: "2018 - 2019",
      logoImg: "logoKickz",
      role: "Web developer, architect, UI/UX designer",
    },
    {
      company: "IBM",
      date: "2016 - 2018",
      logoImg: "logoIbm",
      role: "Web developer",
    },
    {
      company: "BodyChange",
      date: "2014 - 2015",
      logoImg: "logoBodychange",
      role: "Web developer, UI designer, project manager",
    },
    {
      company: "Peruvian Embassy in Ecuador",
      date: "2008 - 2015",
      logoImg: "logoPeru",
      role: "Web developer, UI/UX designer, graphic designer",
    },
  ]

  return (
    <StaticQuery
      query={graphql`
        query {
          logoIbm: file(relativePath: { eq: "logo-ibm.jpg" }) {
            childImageSharp {
              fixed(width: 50, height: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          logoKickz: file(relativePath: { eq: "logo-kickz.jpg" }) {
            childImageSharp {
              fixed(width: 50, height: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          logoBodychange: file(relativePath: { eq: "logo-bodychange.jpg" }) {
            childImageSharp {
              fixed(width: 50, height: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          logoPeru: file(relativePath: { eq: "logo-peru.jpg" }) {
            childImageSharp {
              fixed(width: 50, height: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
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
              My tools of choice were Macromedia Dreamweaver and Microsoft
              FrontPage for code editing, and Yahoo! GeoCities or the free .tk
              domains host for hosting.
            </p>
          </section>

          <section>
            <h2>Some companies I've worked at</h2>
          </section>

          {companies.map(({ company, date, logoImg, role }, index) => (
            <div className="work-company-block" key={index}>
              <div>
                <Img
                  className="company-logo"
                  fixed={data[logoImg].childImageSharp.fixed}
                />
              </div>
              <div>
                <h3>{company}</h3>
                <div className="font-small">{role}</div>
              </div>
              <div className="col-date">{date}</div>
            </div>
          ))}
        </Layout>
      )}
    />
  )
}

export default SecondPage
