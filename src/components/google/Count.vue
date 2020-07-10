<template>
  <div class="count">About {{ count }} results ({{ requestTime }} seconds)</div>
</template>

<script>
export default {
  props: {
    count: {
      required: true,
      type: Number,
    },
    requestTime: {
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
