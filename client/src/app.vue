<template>
  <div class="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style lang="scss">
@import "~@shared/css/general.scss";

.app {
  font-family: "IBM Plex Sans";
  width: 100%;
}
</style>
