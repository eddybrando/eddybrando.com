<template>
  <div class="card">
    <g-link v-if="to" class="link" :title="title" :to="to">
      <div class="location" v-text="location" />
      <div class="title" v-text="title" />
    </g-link>
    <div v-else>
      <div class="location" v-text="location" />
      <div class="title" v-text="title" />
    </div>

    <div class="description">
      <span v-if="showDate" class="date"
        >{{ startDateFormatted }} - {{ endDateFormatted }} -</span
      >
      {{ description }}
    </div>
  </div>
</template>

<script>
import moment from "moment";

const dateFormat = "MMM YYYY";

export default {
  props: {
    description: {
      required: true,
      type: String,
    },
    endDate: {
      default: "",
      required: false,
      type: String,
    },
    location: {
      required: true,
      type: String,
    },
    showDate: {
      default: false,
      required: false,
      type: Boolean,
    },
    startDate: {
      default: "",
      required: false,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    to: {
      default: "",
      required: false,
      type: String,
    },
  },

  computed: {
    endDateFormatted() {
      return this.endDate ? moment(this.endDate).format(dateFormat) : "Present";
    },

    startDateFormatted() {
      return moment(this.startDate).format(dateFormat);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/google/variables";

.card {
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  margin-bottom: 10px;
  padding: 16px;
}

.date {
  color: $gray-dark;
}

.link {
  color: inherit;
  text-decoration: none;

  &:focus,
  &:hover {
    .title {
      text-decoration: underline;
    }
  }
}

.title {
  color: $blue;
  font-size: 20px;
  line-height: 1.3;
  margin: 4px 0;
}

@media only screen and (min-width: $viewport-lg-min) {
  .card {
    border-radius: initial;
    box-shadow: initial;
    margin-bottom: 27px;
    padding: initial;
  }
}
</style>
