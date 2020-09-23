<template>
  <nav class="nav-bar">
    <router-link class="nav-bar-item is-size-4" to="/">
      <span class="nav-bar-item-text">Loja Virtual</span>
    </router-link>
  </nav>
</template>
<script>
import NavBarMenu from "./NavBarMenu.vue";
export default {
  name: "NavBarBrand",
  components: {
    NavBarMenu,
  },
};
</script>
<style lang="scss">
@import "~@shared/css/colors.scss";
.nav-bar {
  display: flex;
  background-color: black;
}
.nav-bar-item {
  text-decoration: none;
}
.nav-bar-item-text {
  font-size: 2.5rem;
  color: $white;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>