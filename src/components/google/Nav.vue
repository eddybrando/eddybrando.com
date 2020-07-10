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
  padding: 16px 12px 12px 10px;
  text-decoration: none;
}
</style>
