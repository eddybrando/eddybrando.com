<template>
  <Layout
    headerTitleHighlight="work"
    headerTitlePrepend="My"
    mainContainerClass="main-container--full-height"
    :nav="[{ label: 'Home', link: '/' }, { label: 'Contact me', link: '/contact-me' }]"
  >
    <div class="main-container">
      <div>
        <section class="how-it-began">
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

        <section class="work-companies">
          <h2>Some companies I've worked at</h2>
        </section>

        <CompanyBlock
          v-for="({date, details, headline, lead, logoImg }, index) in companies"
          :date="date"
          :details="details"
          :headline="headline"
          :key="`company-${index}`"
          :lead="lead"
          :logoImg="logoImg"
        />

        <section class="work-companies">
          <h2>A few of my personal projects</h2>
        </section>

        <CompanyBlock
          v-for="({ details, headline, lead, linkLabel, linkTo }, index) in personalProjects"
          :details="details"
          :headline="headline"
          :key="`personal-project-${index}`"
          :lead="lead"
          :linkLabel="linkLabel"
          :linkTo="linkTo"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import CompanyBlock from "~/components/CompanyBlock";

export default {
  components: { CompanyBlock },

  data: () => ({
    companies: [
      {
        date: "2019 - Present",
        details:
          "Tech stack: JavaScript, TypeScript; Angular, Vue.js; RxJs, Vuex; Node.js; GraphQL, MongoDB",
        headline: "IBM",
        lead: "Senior web developer (Team lead)",
        logoImg: "logo-ibm.jpg"
      },
      {
        date: "2018 - 2019",
        details: "Tech stack: JavaScript, JSP; Vue.js; Vuex; Java, PHP",
        headline: "KICKZ (Zalando)",
        lead: "Lead web developer",
        logoImg: "logo-kickz.jpg"
      },
      {
        date: "2016 - 2018",
        details: "Tech stack: JavaScript; React, Vue.js; Redux; Node.js",
        headline: "IBM",
        lead: "Web developer",
        logoImg: "logo-ibm.jpg"
      },
      {
        date: "2014 - 2015",
        details: "Tech stack: JavaScript; PHP; WordPress",
        headline: "BodyChange",
        lead: "Web developer",
        logoImg: "logo-bodychange.jpg"
      },
      {
        date: "2008 - 2015",
        details: "Tech stack: JavaScript; PHP; Joomla",
        headline: "Peruvian Embassy in Ecuador",
        lead: "Web developer",
        logoImg: "logo-peru.jpg"
      }
    ],

    personalProjects: [
      {
        headline: "Eddybrando.com",
        lead: "Professional personal website",
        details:
          "React-based PWA generated with GatsbyJS, powered by GraphQL and tested with Jest",
        linkLabel: "eddybrando.com",
        linkTo: "https://eddybrando.com"
      },
      {
        headline: "Podcasts en Español",
        lead: "Social network for podcast enthusiasts",
        details:
          "Laravel-powered website with a PHP back end, a front end enhanced with Vue.js, and MySQL databases",
        linkLabel: "podcastsenespanol.com",
        linkTo: "https://podcastsenespanol.com/"
      },
      {
        headline: "VioletaCast",
        lead: "Podcast producer website",
        details:
          "Multilingual Laravel website written in PHP and Blade templates",
        linkLabel: "violetacast.com",
        linkTo: "https://violetacast.com/en"
      },
      {
        headline: "Psicóloga Edith",
        lead: "Professional personal website",
        details:
          "Vue.js-based website generated with Gridsome and connected to PHP Lumen micro-services",
        linkLabel: "psicologaedith.com",
        linkTo: "https://psicologaedith.com/"
      },
      {
        headline: "Papel Higiénico Justo",
        lead: "Toilet paper usage calculator",
        details: "Calculator website built with Svelte",
        linkLabel: "papelhigienicojusto.com",
        linkTo: "https://papelhigienicojusto.com/"
      }
    ]
  }),

  metaInfo: {
    title: "My work",
    meta: [
      {
        name: "description",
        content:
          "This is my work as a developer, designer and entrepreneur specialised in web technologies."
      }
    ]
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables";

.how-it-began {
  text-align: left;
  margin-bottom: 50px;
}

.work-companies {
  text-align: left;
}

.main-container {
  @media only screen and (min-width: $viewport-lg-min) {
    overflow-y: scroll;
    padding-bottom: 40px;
    padding-top: 40px;
  }

  @media only screen and (min-width: $viewport-xl-min) {
    padding-bottom: 80px;
    padding-top: 80px;

    .work-company-block {
      grid-template-columns: 80px auto 150px;

      .col-date {
        display: block;
      }

      .inline-date {
        display: none;
      }

      &.no-img {
        grid-template-columns: auto;
      }
    }
  }
}
</style>
