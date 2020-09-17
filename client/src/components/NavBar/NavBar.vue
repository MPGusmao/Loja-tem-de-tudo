<template>
  <div class="nav-bar">
    <router-link class="nav-bar-item is-size-4" to="/">
      <span class="nav-bar-item-text">Virtual Store</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style lang="scss">
@import "~@shared/css/colors.scss";
.nav-bar {
  display: flex;
  background-color: $soft;
}
.nav-bar-item {
  text-decoration: none;
}
.nav-bar-item-text {
  font-size: 2.5rem;
  color: $white;
  padding-left: 0.5rem;
}
</style>