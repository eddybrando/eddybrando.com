<template>
  <header>
    <div class>Search</div>
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

.nav {
  border-bottom: $border;
  padding-left: $main-margin-left-lg;
}
</style>
