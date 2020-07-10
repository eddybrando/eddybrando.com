<template>
  <GoogleLayout>
    <div class="count">
      About {{ experiencesCount }} results ({{ $options.requestTime }}
      seconds)
    </div>

    <div>{{ $page.experiences }}</div>
  </GoogleLayout>
</template>

<page-query>
query {
  experiences: allExperience {
    totalCount
    edges {
      node {
        id
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

.count {
  color: $gray-dark;
  padding: 11px 0;
}
</style>
