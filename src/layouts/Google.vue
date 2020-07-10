<template>
  <div>
    <Header />
    <main class="main"><slot /></main>
  </div>
</template>

<script>
import Header from "~/components/google/Header";
import "~/assets/css/google/base.scss";

const layoutClass = "google";

export default {
  components: { Header },

  mounted() {
    document.body.classList.add(layoutClass);
  },

  beforeDestroy() {
    document.body.classList.remove(layoutClass);
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/google/variables";

.main {
  padding: $main-spacing-sm;
}

@media only screen and (min-width: $viewport-lg-min) {
  .main {
    margin-left: $main-margin-left-lg;
    padding: initial;
    width: $main-width-lg;
  }
}
</style>
