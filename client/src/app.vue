<template>
  <div id="services-app">
      <NavBarBrand/>
      <Menu/>
      <router-view/>
  </div>
</template>
<script>
import NavBarBrand from "./components/NavBar/NavBarBrand.vue";
import Menu from "./components/Menu/Menu.vue"

export default {
  components: {
    NavBarBrand,
    Menu
  },
};
</script>
<style lang="scss">
@import "~@shared/css/general.scss";

#services-app {
  font-family: "IBM Plex Sans";
  width: 100%;
  height: 100%;
}
</style>
