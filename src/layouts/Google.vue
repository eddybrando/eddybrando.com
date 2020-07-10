<template>
  <div>
    <Header />
    <main class="main"><slot /></main>
  </div>
</template>

<script>
import Header from "~/components/google/Header";
import "~/assets/css/google/base.scss";

export default {
  components: { Header },
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
