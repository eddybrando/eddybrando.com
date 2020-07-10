<template>
  <GoogleLayout>
    <Count :count="1" :requestTime="0.2" />

    <div class="main-container">
      <section class="profile-picture-container">
        <g-image class="profile-picture" src="~/assets/img/eddybrando.jpg" />
      </section>

      <section class="description">
        <p>
          I’m a Peruvian developer, designer and entrepreneur specialised in web
          technologies.
        </p>
      </section>
    </div>
  </GoogleLayout>
</template>

<script>
import Count from "~/components/google/Count";
import GoogleLayout from "~/layouts/Google";

export default {
  components: { Count, GoogleLayout },

  metaInfo: {
    title: "Eddybrando Vásquez - Google Search",
    titleTemplate: "",
    meta: [
      {
        name: "description",
        content: "",
      },
    ],
  },
};
</script>

<style lang="scss" scoped></style>
