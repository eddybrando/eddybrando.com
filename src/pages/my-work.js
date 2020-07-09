import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import CompanyBlock from '../components/company-block';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const PureMyWorkPage = ({data}) => {
  const companies = [
    {
      date: '2019 - Present',
      details:
        'Tech stack: JavaScript, TypeScript; Angular, Vue.js; RxJs, Vuex; Node.js; GraphQL, MongoDB',
      headline: 'IBM',
      lead: 'Senior web developer (Team lead)',
      logoImg: 'logoIbm',
    },
    {
      date: '2018 - 2019',
      details: 'Tech stack: JavaScript, JSP; Vue.js; Vuex; Java, PHP',
      headline: 'KICKZ (Zalando)',
      lead: 'Lead web developer',
      logoImg: 'logoKickz',
    },
    {
      date: '2016 - 2018',
      details: 'Tech stack: JavaScript; React, Vue.js; Redux; Node.js',
      headline: 'IBM',
      lead: 'Web developer',
      logoImg: 'logoIbm',
    },
    {
      date: '2014 - 2015',
      details: 'Tech stack: JavaScript; PHP; WordPress',
      headline: 'BodyChange',
      lead: 'Web developer',
      logoImg: 'logoBodychange',
    },
    {
      date: '2008 - 2015',
      details: 'Tech stack: JavaScript; PHP; Joomla',
      headline: 'Peruvian Embassy in Ecuador',
      lead: 'Web developer',
      logoImg: 'logoPeru',
    },
  ];

  const personalProjects = [
    {
      headline: 'Eddybrando.com',
      lead: 'Professional personal website',
      details:
        'React-based PWA generated with GatsbyJS, powered by GraphQL and tested with Jest',
      linkLabel: 'eddybrando.com',
      linkTo: 'https://eddybrando.com',
    },
    {
      headline: 'Podcasts en Español',
      lead: 'Social network for podcast enthusiasts',
      details:
        'Laravel-powered website with a PHP back end, a front end enhanced with Vue.js, and MySQL databases',
      linkLabel: 'podcastsenespanol.com',
      linkTo: 'https://podcastsenespanol.com/',
    },
    {
      headline: 'VioletaCast',
      lead: 'Podcast producer website',
      details:
        'Multilingual Laravel website written in PHP and Blade templates',
      linkLabel: 'violetacast.com',
      linkTo: 'https://violetacast.com/en',
    },
    {
      headline: 'Psicóloga Edith',
      lead: 'Professional personal website',
      details:
        'Vue.js-based website generated with Gridsome and connected to PHP Lumen micro-services',
      linkLabel: 'psicologaedith.com',
      linkTo: 'https://psicologaedith.com/',
    },
    {
      headline: 'Papel Higiénico Justo',
      lead: 'Toilet paper usage calculator',
      details: 'Calculator website built with Svelte',
      linkLabel: 'papelhigienicojusto.com',
      linkTo: 'https://papelhigienicojusto.com/',
    },
  ];

  return (
    <Layout
      headerTitle={{prepend: 'My ', highlight: 'work'}}
      mainContainerClass="main-container--full-height"
      nav={[
        {label: 'Home', link: '/'},
        {label: 'Contact me', link: '/contact-me'},
      ]}
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

      <section className="work-companies">
        <h2>Some companies I've worked at</h2>
      </section>

      {companies.map(({headline, date, logoImg, lead, details}, index) => (
        <CompanyBlock
          data={data}
          date={date}
          details={details}
          headline={headline}
          key={index}
          lead={lead}
          logoImg={logoImg}
        />
      ))}

      <section className="work-companies">
        <h2>A few of my personal projects</h2>
      </section>

      {personalProjects.map(
        ({headline, lead, linkLabel, linkTo, details}, index) => (
          <CompanyBlock
            details={details}
            headline={headline}
            key={index}
            lead={lead}
            linkLabel={linkLabel}
            linkTo={linkTo}
          />
        ),
      )}
    </Layout>
  );
};

const MyWorkPage = () => (
  <StaticQuery
    query={graphql`
      query {
        logoIbm: file(relativePath: {eq: "logo-ibm.jpg"}) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoKickz: file(relativePath: {eq: "logo-kickz.jpg"}) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoBodychange: file(relativePath: {eq: "logo-bodychange.jpg"}) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoPeru: file(relativePath: {eq: "logo-peru.jpg"}) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => <PureMyWorkPage data={data} />}
  />
);

export default MyWorkPage;
