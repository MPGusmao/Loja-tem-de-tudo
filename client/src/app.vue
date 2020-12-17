<template>
  <div class="app">
    <NavBar />
    <Login />
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar/NavBar.vue";
import Login from "./components/Login/LoginForm.vue";
export default {
  components: {
    NavBar,
    Login,
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
