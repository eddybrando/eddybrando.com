<template>
  <Layout
    headerTitleHighlight="Contact"
    headerTitleAppend="me"
    :nav="[
      { label: 'Home', link: '/' },
      { label: 'My work', link: '/my-work' },
    ]"
  >
    <div class="main-container">
      <section>
        <p>
          You can always send me a message over
          <TextLink
            label="LinkedIn"
            title="Open my LinkedIn profile"
            to="https://www.linkedin.com/in/eddybrandovasquez/"
          />.
        </p>
        <p>I do my best to try and answer ASAP.</p>
      </section>
    </div>
  </Layout>
</template>

<script>
import TextLink from "~/components/TextLink";

export default {
  components: { TextLink },

  metaInfo: {
    title: "Contact me",
    meta: [
      {
        name: "description",
        content:
          "Get in touch with me by using one of this awesome platforms! (It's free!)",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables";

.main-container {
  display: grid;
}

@media only screen and (min-width: $viewport-lg-min) {
  .main-container {
    align-items: center;
    height: 100%;
  }
}
</style>
