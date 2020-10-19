<template>
  <div id="services-app">
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

#services-app {
  font-family: "IBM Plex Sans";
  width: 100%;
  height: 100%;
  background-color: #e6e6e6;
}
</style>
