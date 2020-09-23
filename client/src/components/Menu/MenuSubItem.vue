<template>
  <router-link :to="{ name: pageName, query: { name: Name}}">
    <div class="left-menu-sub-item">
      <div class="left-menu-sub-item-icon">
        <i :class="icon"></i>
      </div>
      <div class="left-menu-sub-item-text">{{label}}</div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "MenuSubItem",
  props: {
    icon: {
      type: String,
      default: "fas fa-times",
      required: true,
    },
    label: {
      type: String,
      default: "empty",
      required: true,
    },
    pageName: {
      type: String,
      default: null,
      required: true,
    },
    Name: {
      type: String,
      default: null,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@shared/css/colors.scss";
.left-menu-sub-item {
  display: flex;
  background-color: $soft;
  color: $white;
  padding: 0.5rem;
  padding-left: 3rem;
  border-bottom-style: solid !important;
  border-color: $white !important;
  border-width: 0.05rem !important;
  align-items: center;
}
.left-menu-sub-item-icon {
  color: $white;
  font-size: 1.3rem;
}
.left-menu-sub-item:hover {
  background-color: $white;
}
.left-menu-sub-item-text {
  color: black;
  font-size: 1.2rem;
  padding-left: 1rem;
}
</style>
