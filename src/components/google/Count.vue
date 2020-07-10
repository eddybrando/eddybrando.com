<template>
  <div class="count">
    About {{ count }} results ({{ $options.requestTime }} seconds)
  </div>
</template>

<script>
export default {
  created() {
    this.$options.requestTime = Math.floor(Math.random() * 100) / 100;
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
