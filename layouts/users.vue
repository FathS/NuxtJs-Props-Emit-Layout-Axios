<template>
  <div>
    <header-app @sidenavToggle="displaySidenav = !displaySidenav" />
    <nuxt />
  </div>
</template>
<script>
import header from "../components/Header";

export default {
  data() {
    return {};
  },
  components: {
    "header-app": header
  }
};
</script>
<style>
/* html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} */
</style>
