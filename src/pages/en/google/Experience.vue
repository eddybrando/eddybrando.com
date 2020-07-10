<template>
  <GoogleLayout>
    <Count :count="experiencesCount" />

    <Card
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
      :description="description"
      :endDate="endDate"
      :key="id"
      :location="`${locationCity} › ${locationCountry}`"
      showDate
      :startDate="startDate"
      :title="`${title} - ${company}`"
    />
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
import Card from "~/components/google/Card";
import Count from "~/components/google/Count";
import GoogleLayout from "~/layouts/Google";

export default {
  components: { Card, Count, GoogleLayout },

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
