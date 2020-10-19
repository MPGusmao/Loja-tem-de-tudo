<template>
  <div class="navbar">
    <div class="navbar-content">
      <div class="navbar-content-item">
        <router-link class="link" to="/">
          <div class="navbar-content-item-logo">TemDeTudo</div>
        </router-link>
      </div>
      <Menu :href="'/produtoform'" :label="'Produto'" />
      <Menu :href="'/venda'" :label="'Vendas'" />
    </div>
  </div>
</template>
<script>
import Menu from "./Menu.vue";
export default {
  name: "NavBar",
  components: {
    Menu,
  },
};
</script>
<style>
.navbar {
  display: flex;
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
}
</style>