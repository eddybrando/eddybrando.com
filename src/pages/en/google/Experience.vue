<template>
  <GoogleLayout>
    <div class="count">
      About {{ experiencesCount }} results ({{ $options.requestTime }}
      seconds)
    </div>

    <div
      v-for="{
        company,
        description,
        endDate,
        id,
        locationCity,
        locationCountry,
        startDate,
        title,
      } in experiences"
      class="card"
      :key="id"
    >
      <div class="location">{{ locationCountry }} › {{ locationCity }}</div>
      <div class="title">{{ title }} - {{ company }}</div>
      <div class="description">
        <span class="time"
          >{{ startDate }} - <span v-if="endDate">{{ endDate }}</span
          ><span v-else>Present</span> -</span
        >
        {{ description }}
      </div>
    </div>
  </GoogleLayout>
</template>

<page-query>
query {
  experiences: allExperience {
    totalCount
    edges {
      node {
        company
        description
        endDate
        id
        locationCity
        locationCountry
        startDate
        title
      }
    }
  }
}
</page-query>

<script>
import moment from "moment";
import GoogleLayout from "~/layouts/Google";

const dateFormat = "MMM YYYY";
const fakeRequestTime = Math.floor(Math.random() * 100) / 100;

export default {
  components: { GoogleLayout },

  created() {
    this.$options.requestTime = fakeRequestTime;
  },

  computed: {
    experiences() {
      return this.$page.experiences.edges.map(({ node }) => ({
        ...node,
        endDate: node.endDate ? moment(node.endDate).format(dateFormat) : null,
        startDate: moment(node.startDate).format(dateFormat),
      }));
    },

    experiencesCount() {
      return this.$page.experiences.totalCount;
    },
  },

  metaInfo: {
    title: "Eddybrando Vásquez - Google Experience",
    titleTemplate: "",
    meta: [
      {
        name: "description",
        content:
          "Experience of Eddybrando Vásquez in a user interface designed like Google Search.",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/google/variables";

.card {
  margin-bottom: 27px;

  .time {
    color: $gray-dark;
  }

  .title {
    color: $blue;
    font-size: 20px;
    line-height: 1.3;
    margin: 4px 0;
  }
}

.count {
  color: $gray-dark;
  margin-bottom: 10px;
  padding: 11px 0;
}
</style>
