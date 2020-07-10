<template>
  <div>
    <Header />
    <slot />
  </div>
</template>

<script>
import Header from "~/components/google/Header";
import "~/assets/css/google/base.scss";

export default {
  components: { Header },
};
</script>
