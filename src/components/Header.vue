<template>
  <header class="header">
    <nav class="nav">
      <div>
        <TextLink
          v-for="({label, link}) in nav"
          class="link-block"
          :key="label"
          :label="label"
          :to="link"
        />
      </div>
    </nav>

    <transition name="fade" appear>
      <section class="title">
        <h1 class="headline mb-0">
          {{titlePrepend}}
          <span class="highlight" v-text="titleHighlight" />
          {{titleAppend}}
        </h1>
      </section>
    </transition>
  </header>
</template>

<script>
import TextLink from "~/components/TextLink";

export default {
  components: { TextLink },

  props: {
    nav: {
      required: true,
      type: Array
    },
    titleAppend: {
      required: true,
      type: String
    },
    titleHighlight: {
      required: true,
      type: String
    },
    titlePrepend: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables";

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.75s;
}

.header {
  background-color: $color-blue;
  padding: 30px 40px 0;
  text-align: center;
}

.headline {
  font-size: 25px;
}

.highlight {
  background: linear-gradient(180deg, transparent 20%, $color-yellow 20%);
}

.link-block {
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }
}

@media only screen and (min-width: $viewport-lg-min) {
  .header {
    display: grid;
    grid-template-rows: 1fr 200px 1fr;
    text-align: right;
  }

  .headline {
    font-size: 35px;
  }

  .link-block {
    font-size: 15px;
  }

  .nav {
    align-items: end;
    display: grid;
    justify-items: end;
  }

  .title {
    align-items: center;
    display: grid;
  }
}

@media only screen and (min-width: $viewport-xl-min) {
  .header {
    padding-left: 160px;
    padding-right: 80px;
  }
}
</style>
