<template>
  <g-link class="link" :title="label" :to="to">
    {{label}}
    <font-awesome-icon class="arrow" :icon="linkIcon" />
  </g-link>
</template>

<script>
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default {
  computed: {
    linkIcon() {
      return faArrowRight;
    }
  },

  props: {
    label: {
      required: true,
      type: String
    },
    to: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables";

.link {
  border-bottom: 3px solid black;
  color: black;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;

  &:focus,
  &:hover {
    .arrow {
      animation: arrowAnimation 0.75s ease-in-out infinite;
    }
  }
}

@media only screen and (min-width: $viewport-lg-min) {
  .link {
    font-size: 15px;
  }
}

@keyframes arrowAnimation {
  50% {
    opacity: 0.25;
  }
}
</style>
