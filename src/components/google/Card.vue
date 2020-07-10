<template>
  <div class="card">
    <div class="location">{{ locationCountry }} › {{ locationCity }}</div>
    <div class="title">{{ title }} - {{ company }}</div>
    <div class="description">
      <span class="time"
        >{{ startDateFormatted }} -
        <span v-if="endDateFormatted">{{ endDateFormatted }}</span
        ><span v-else>Present</span> -</span
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
    company: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    endDate: {
      default: "",
      required: false,
      type: String,
    },
    locationCity: {
      required: true,
      type: String,
    },
    locationCountry: {
      required: true,
      type: String,
    },
    startDate: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },

  computed: {
    endDateFormatted() {
      return this.endDate ? moment(this.endDate).format(dateFormat) : null;
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
  margin-bottom: 27px;
}

.time {
  color: $gray-dark;
}

.title {
  color: $blue;
  font-size: 20px;
  line-height: 1.3;
  margin: 4px 0;
}
</style>
