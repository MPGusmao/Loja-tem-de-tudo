<template>
<<<<<<< HEAD
  <div class="navbar">
    <div class="navbar-content">
      <div class="navbar-content-item">
        <router-link class="link" to="/">
          <div class="navbar-content-item-logo">TemDeTudo</div>
        </router-link>
      </div>
      <Menu :href="''" :label="'Produtos'" />
      <Menu :href="''" :label="'Vendas'" />
    </div>
  </div>
</template>
<script>
import Menu from "./Menu.vue";
=======
  <div class="nav-bar">
    <router-link class="nav-bar-item" to="/">
      <span class="nav-bar-item-text">Tem de tudo</span>
    </router-link>
    <Menu :href="'/produtoform'" :nameButton="'Produtos'" />
    <Menu :href="'/venda'" :nameButton="'Vendas'" />
  </div>
</template>
<script>
import Menu from "../Menu/Menu.vue";
>>>>>>> ec8f37ca16fa983fcce30df89925865593d1c4b0
export default {
  name: "NavBar",
  components: {
    Menu,
  },
};
</script>
<<<<<<< HEAD
<style>
.navbar {
  display: flex;
  background-color: #ededed;
}
.navbar-content {
  display: flex;
  width: 1000px;
  margin: auto;
  background-color: #656565;
}
.navbar-content-item {
  display: flex;
  display: flex;
  width: 100%;
}
.navbar-content-item a {
  text-decoration: none;
}
.navbar-content-item-logo {
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0.5rem;
  color: orange;
  text-decoration: none;
=======
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
  font-size: 2.7rem;
  color: black;
  padding-left: 0.5rem;
>>>>>>> ec8f37ca16fa983fcce30df89925865593d1c4b0
}
</style>