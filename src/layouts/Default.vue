<template>
  <div class="page-grid">
    <Header
      :nav="nav"
      :titleAppend="headerTitleAppend"
      :titleHighlight="headerTitleHighlight"
      :titlePrepend="headerTitlePrepend"
    />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="header-bg-curve"
    >
      <path
        fill="#bfd4f7"
        fill-opacity="1"
        d="M0,224L80,197.3C160,171,320,117,480,117.3C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      />
    </svg>

    <transition name="fade" appear>
      <main class="main-container" :class="mainContainerClass">
        <slot />
      </main>
    </transition>

    <div class="animated-bg">
      <div v-for="index in 10" class="bg-element" :key="index" />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";

const layoutClass = "default";

export default {
  components: { Header },

  mounted() {
    document.body.classList.add(layoutClass);
  },

  beforeDestroy() {
    document.body.classList.remove(layoutClass);
  },

  props: {
    headerTitleAppend: {
      default: "",
      required: false,
      type: String,
    },
    headerTitleHighlight: {
      required: true,
      type: String,
    },
    headerTitlePrepend: {
      default: "",
      required: false,
      type: String,
    },

    mainContainerClass: {
      default: "",
      required: false,
      type: String,
    },

    nav: {
      default: () => [],
      required: false,
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables";

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
  transition-delay: 0.25s;
}

.header-bg-curve {
  margin-top: -20px;
}

.main-container {
  padding: 0 30px 30px;
}

.animated-bg {
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -100;

  .bg-element {
    animation: animateBg 30s linear infinite;
    background: $color-blue-light;
    bottom: -150px;
    display: block;
    height: 20px;
    list-style: none;
    position: absolute;
    width: 20px;
  }

  .bg-element:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .bg-element:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .bg-element:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .bg-element:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .bg-element:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .bg-element:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .bg-element:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .bg-element:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .bg-element:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .bg-element:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 10s;
  }
}

@media only screen and (max-width: $viewport-sm-max) {
  .main-container {
    text-align: center;
  }
}

@media only screen and (min-width: $viewport-lg-min) {
  .animated-bg {
    left: 50%;
    width: 50%;
  }

  .header-bg-curve {
    display: none;
  }

  .main-container {
    padding: 30px 40px;
  }

  .main-container--full-height {
    overflow-y: scroll;
    padding-bottom: 40px;
    padding-top: 40px;
  }

  .page-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh;
  }
}

@media only screen and (min-width: $viewport-xl-min) {
  .main-container {
    padding-left: 80px;
    padding-right: 160px;
  }

  .main-container--full-height {
    padding-bottom: 80px;
    padding-top: 80px;
  }
}

@keyframes animateBg {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 50%;
  }
  25% {
    border-radius: 0;
  }
  50% {
    border-radius: 100%;
  }
  75% {
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
