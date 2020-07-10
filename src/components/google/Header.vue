<template>
  <header>
    <div class="top-section">
      <g-link class="logo-link" title="Back to the start" to="/">
        <g-image class="logo-img" src="~/assets/img/google/logo.png" />
      </g-link>
      <div class="search-box">
        Eddybrando Vásquez
      </div>
    </div>
    <Nav class="nav" />
  </header>
</template>

<script>
import Nav from "~/components/google/Nav";

export default {
  components: { Nav },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/google/variables";

$search-box-padding-x: 16px;

.logo-img {
  height: 30px;
  margin: 0 auto 14px;
  width: 92px;
}

.logo-link {
  display: flex;
  justify-items: center;
}

.nav {
  border-bottom: $border;
  padding: 0 $main-spacing-sm;
}

.search-box {
  align-items: center;
  border: $border;
  border-radius: 24px;
  display: flex;
  font-size: 16px;
  height: 44px;
  padding: 0 $search-box-padding-x;

  &:hover {
    box-shadow: $box-shadow;
  }
}

.top-section {
  align-items: center;
  margin-top: 20px;
  padding: $main-spacing-sm;
}

@media only screen and (min-width: $viewport-lg-min) {
  .logo-img {
    margin: auto;
  }

  .nav {
    padding-left: $main-margin-left-lg;
  }

  .top-section {
    display: grid;
    grid-template-columns: ($main-margin-left-lg - $search-box-padding-x) (
        $main-width-lg + ($search-box-padding-x * 2)
      ) 1fr;
    padding: initial;
  }
}
</style>
