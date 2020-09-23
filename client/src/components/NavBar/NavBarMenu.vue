<template>
  <div class="navbar-menu">
    <div class="navbar-start" />
    <a :href="href">
      <div class="navbar-item menu-hover text">
        <i class="icon-user" :class="icon" />
        {{ label }}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "NavBarMenu",
  props: {
    href: {
      type: String,
      default: "#",
      required: true,
    },
    icon: {
      type: String,
      default: "fas fa-times",
      required: true,
    },
    label: {
      type: String,
      default: "ItemNameNotPassed",
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import "~@shared/css/colors.scss";
.navbar-menu {
  flex-grow: 0;
  border-left: solid;
  border-color: $white;
  align-self: center;
}
.text {
  color: $white1 !important;
  font-size: 1rem;
}
.icon-user {
  padding-left: 1rem !important;
  padding-right: 1rem;
  color: $white;
}
@media screen and (max-width: 1024px !important) {
  .navbar-menu {
    border-top: solid !important;
    border-color: white !important;
  }
}
</style>


