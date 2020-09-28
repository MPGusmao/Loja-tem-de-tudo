<template>
  <div class="nav-bar">
    <router-link class="nav-bar-item" to="/">
      <span class="nav-bar-item-text">Loja tem de tudo</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  components: {
  },
};
</script>
<style lang="scss">
@import "~@shared/css/colors.scss";
.nav-bar {
  display: flex;
  background-color: #ededed;
}
.nav-bar-item {
  text-decoration: none;
  border-right: solid 0.2rem $white;
  padding-right: 0.5rem;
}
.nav-bar-item-text {
  font-size: 2.5rem;
  color: black;
  padding-left: 0.5rem;
}
</style>