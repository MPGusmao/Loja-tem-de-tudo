<template>
  <div>
    <NavBarBrand />
  </div>
</template>
<script>
import NavBarBrand from "./NavBarBrand.vue";
import NavBarMenu from "./NavBarMenu.vue";
export default {
  name: "NavBar",
  components: {
    NavBarBrand,
    NavBarMenu,
  },
};
</script>
<style lang="scss">
</style>