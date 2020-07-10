<template>
  <GoogleLayout>
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
import GoogleLayout from "~/layouts/Google";

export default {
  components: { GoogleLayout },

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
