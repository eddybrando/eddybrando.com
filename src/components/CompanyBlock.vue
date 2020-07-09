<template>
  <div class="work-company-block" :class="logoImg ? '' : 'no-img'">
    <div v-if="logoImg">
      <g-image class="company-logo" :src="imgSrc" />
    </div>

    <div>
      <h3>
        {{ headline }}
        <span v-if="date" class="inline-date">{{ date }}</span>
      </h3>
      <div class="font-small" v-text="lead" />
      <div class="font-small" style="opacity: 0.4;" v-text="details" />
    </div>

    <div v-if="date" class="col-date">{{ date }}</div>

    <div v-if="linkLabel && linkTo">
      <TextLink :label="linkLabel" :to="linkTo" />
    </div>
  </div>
</template>

<script>
import TextLink from "~/components/TextLink";

export default {
  components: { TextLink },

  computed: {
    imgSrc() {
      return require("~/assets/img/" + this.logoImg);
    },
  },

  props: {
    date: {
      default: "",
      required: false,
      type: String,
    },
    details: {
      default: "",
      required: false,
      type: String,
    },
    headline: {
      required: true,
      type: String,
    },
    logoImg: {
      default: "",
      required: false,
      type: String,
    },
    lead: {
      required: true,
      type: String,
    },
    linkLabel: {
      default: "",
      required: false,
      type: String,
    },
    linkTo: {
      default: "",
      required: false,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables";

.col-date {
  display: none;
  justify-self: end;
  text-align: right;
}

.company-logo {
  box-shadow: $img-box-shadow;
  height: 50px;
  width: 50px;
}

.work-company-block {
  display: grid;
  grid-template-columns: 80px auto;
  margin-bottom: 30px;
  text-align: left;

  h3 {
    margin-bottom: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.no-img {
    grid-template-columns: auto;
  }
}

@media only screen and (min-width: $viewport-lg-min) {
  .font-small {
    font-size: $font-small;
  }

  .work-company-block {
    margin-bottom: 50px;
  }
}

@media only screen and (min-width: $viewport-xl-min) {
  .col-date {
    display: block;
  }

  .inline-date {
    display: none;
  }

  .work-company-block {
    grid-template-columns: 80px auto 150px;

    &.no-img {
      grid-template-columns: auto;
    }
  }
}
</style>
