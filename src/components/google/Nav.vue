<template>
  <nav>
    <g-link
      v-for="{ label, to } in items"
      class="nav-item"
      :key="label"
      :title="label"
      :to="to"
      >{{ label }}</g-link
    >
  </nav>
</template>

<script>
const pathRoot = "/en/google";

export default {
  data: () => ({
    items: [
      {
        label: "All",
        to: `${pathRoot}/`,
      },
      {
        label: "Experience",
        to: `${pathRoot}/experience`,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/google/variables";

.nav-item {
  color: $gray-dark;
  display: inline-block;
  font-size: 13px;
  padding: 5px 16px;
  text-decoration: none;
  text-transform: uppercase;

  &.active--exact {
    color: $blue;
    border-bottom: 3px solid $blue;
  }
}

@media only screen and (min-width: $viewport-lg-min) {
  .nav-item {
    padding: 16px 12px 12px 10px;
    text-transform: initial;
  }
}
</style>
