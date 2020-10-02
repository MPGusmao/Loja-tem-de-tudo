<template>
  <div class="menu">
    <router-link class="menu-item" :to="href">
      <span class="menu-item-button-button">{{ nameButton }}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: {
    href: { type: String, default: "#" },
    nameButton: { type: String, required: true },
  },
};
</script>
<style lang="scss">
@import "~@shared/css/colors.scss";
.menu {
  display: flex;
  background-color: #ededed;
}
.menu-item {
  text-decoration: none;
  padding-right: 0.5rem;
  align-self: center;
  padding-left: 0.5rem;
}
.menu-item-button-button {
  display: flex;
  background-color: #0076ff;
  font-size: 1.7rem;
  border-radius: 0.3rem;
  padding: 0.2rem;
  color: $white;
}
.menu-item-button-button:hover {
  background-color: white;
  color: #0076ff;
}
</style>