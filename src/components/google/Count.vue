<template>
  <div class="count">
    About {{ count }} {{ resultsLabel }} ({{ $options.requestTime }} seconds)
  </div>
</template>

<script>
export default {
  created() {
    this.$options.requestTime = Math.floor(Math.random() * 100) / 100;
  },

  computed: {
    resultsLabel() {
      return this.count === 1 ? "result" : "results";
    },
  },

  props: {
    count: {
      required: true,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/google/variables";

.count {
  color: $gray-dark;
  margin-bottom: 10px;
  padding: 11px 0;
}
</style>
