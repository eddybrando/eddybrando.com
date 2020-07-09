<template>
  <Layout
    headerTitleHighlight="Oops"
    headerTitleAppend=", 404 over here!"
    :nav="[{ label: 'Home', link: '/' }]"
  >
    <div class="main-container">
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn't exist.</p>
        <p>...the sadness.</p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "404: Not found"
  }
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
