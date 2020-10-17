<template>
  <div class="menu">
    <router-link class="menu-item" :to="href">
      <span class="menu-item-label">{{ label }}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: {
    href: { type: String, default: "#" },
    label: { type: String, required: true },
  },
};
</script>
<style lang="scss">
@import "~@shared/css/colors.scss";
.menu {
  display: flex;
}
.menu-item {
  text-decoration: none;
  padding-right: 0.5rem;
  align-self: center;
  padding-left: 0.5rem;
}
.menu-item-label {
  display: flex;
  font-size: 1.2rem;
  padding: 0.2rem;
  color: #ededed;
}
.menu-item-label:hover {
  color: black;
}
</style>