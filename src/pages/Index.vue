<template>
  <Layout headerTitleHighlight="Eddybrando" headerTitlePrepend="Hi, I'm">
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

      <nav class="nav">
        <TextLink label="My work" to="/my-work" style="margin-right: 40px;" />
        <TextLink label="Contact me" to="/contact-me" />
      </nav>

      <div>
        <font-awesome-icon :icon="paletteIcon" />
        <TextLink label="Google mode" to="/en/google" />
      </div>
    </div>
  </Layout>
</template>

<script>
import TextLink from "~/components/TextLink";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

export default {
  components: { TextLink },

  computed: {
    paletteIcon() {
      return faPalette;
    },
  },

  metaInfo: {
    title: "Hi, I'm Eddybrando Vásquez",
    meta: [
      {
        name: "description",
        content:
          "I’m a Peruvian developer, designer and entrepreneur specialised in web technologies.",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables";

.profile-picture {
  animation: keyframesPendulum 5s ease-in-out infinite,
    keyframesBorderRadius 15s ease-in-out infinite;
  height: 100px;
  transform-origin: top center;
  width: 100px;
}

@media only screen and (max-width: $viewport-sm-max) {
  .nav {
    margin-bottom: 30px;
  }

  .profile-picture {
    margin-bottom: 30px;
  }
}

@media only screen and (min-width: $viewport-lg-min) {
  .description {
    align-items: center;
    display: grid;
  }

  .main-container {
    display: grid;
    grid-template-rows: 1fr 200px 1fr auto;
    height: 100%;
  }

  .profile-picture-container {
    align-items: end;
    display: grid;
  }
}

@keyframes keyframesPendulum {
  0% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  50% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  100% {
    transform: rotate3d(0, 0, 1, 5deg);
  }
}

@keyframes keyframesBorderRadius {
  0% {
    border-radius: 0;
  }

  25% {
    border-radius: 50%;
  }

  50% {
    border-radius: 10px;
  }

  75% {
    border-radius: 30%;
  }

  100% {
    border-radius: 0;
  }
}
</style>
