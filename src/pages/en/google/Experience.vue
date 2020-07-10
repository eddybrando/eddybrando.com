<template>
  <GoogleLayout>
    <div class="count">
      About {{ experiencesCount }} results ({{ $options.requestTime }}
      seconds)
    </div>

    <div
      v-for="{ company, description, id, location, title } in experiences"
      class="card"
      :key="id"
    >
      <div class="location">{{ location }}</div>
      <div class="title">{{ title }} - {{ company }}</div>
      <div class="description">{{ description }}</div>
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
        id
        location
        title
      }
    }
  }
}
</page-query>

<script>
import GoogleLayout from "~/layouts/Google";

const fakeRequestTime = Math.floor(Math.random() * 100) / 100;

export default {
  components: { GoogleLayout },

  created() {
    this.$options.requestTime = fakeRequestTime;
  },

  computed: {
    experiences() {
      return this.$page.experiences.edges.map(({ node }) => node);
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

  .location {
    color: $gray-dark;
  }

  .title {
    color: $blue;
    font-size: 20px;
    line-height: 1.3;
    padding-top: 4px;
    margin-bottom: 3px;
  }
}

.count {
  color: $gray-dark;
  margin-bottom: 10px;
  padding: 11px 0;
}
</style>
