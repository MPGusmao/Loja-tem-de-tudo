<template>
  <div class="nav-bar">
    <router-link class="nav-bar-item" to="/">
      <span class="nav-bar-item-text">Tem de tudo</span>
    </router-link>
    <Menu :href="'/produto'" :nameButton="'Produtos'" />
    <Menu :href="'/vendas'" :nameButton="'Vendas'" />
  </div>
</template>
<script>
import Menu from "../Menu/Menu.vue";
export default {
  name: "NavBar",
  components: {
    Menu,
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
  font-size: 3rem;
  color: black;
  padding-left: 0.5rem;
}
</style>