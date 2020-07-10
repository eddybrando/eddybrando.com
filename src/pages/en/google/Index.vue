<template>
  <GoogleLayout>
    <Count :count="1" />

    <Card
      description="View the full source code of these Google Search UI inspired Gridsome pages built with Vue.js components and powered by GraphQL."
      location="github.com/eddybrando/eddybrando.com/ › ... › google"
      title="Check the source code on GitHub"
    />
  </GoogleLayout>
</template>

<script>
import Card from "~/components/google/Card";
import Count from "~/components/google/Count";
import GoogleLayout from "~/layouts/Google";

export default {
  components: { Card, Count, GoogleLayout },

  metaInfo: {
    title: "Eddybrando Vásquez - Google Search",
    titleTemplate: "",
    meta: [
      {
        name: "description",
        content:
          "Eddybrando Vásquez's website in a user interface designed like Google Search.",
      },
    ],
  },
};
</script>
