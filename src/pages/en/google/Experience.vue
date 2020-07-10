<template>
  <GoogleLayout>
    <div class="count">
      About {{ experiencesCount }} results ({{ $options.requestTime }}
      seconds)
    </div>

    <div
      v-for="{ company, id, location, title } in experiences"
      class="card"
      :key="id"
    >
      <div>{{ location }}</div>
      {{ title }} at {{ company }}
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
}

.count {
  color: $gray-dark;
  padding: 11px 0;
}
</style>
