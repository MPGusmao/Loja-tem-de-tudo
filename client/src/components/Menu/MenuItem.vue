<template>
  <div>
    <router-link v-if="!hasSubMenu" :to="href">
      <div class="left-menu-item">
        <div class="left-menu-item-icon">
          <i :class="icon"></i>
        </div>
        <div class="left-menu-item-text">{{label}}</div>
      </div>
    </router-link>
    <div v-if="hasSubMenu" class="left-menu-item" @click="toogleAppMenu">
      <div class="menu-label">
        <i :class="icon"></i>
      </div>
      <div class="left-menu-item-text">{{label}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    href: {
      type: String,
      default: "#"
    },
    icon: {
      type: String,
      default: "fas fa-times",
      required: true
    },
    label: {
      type: String,
      default: "ItemNameNotPassed",
      required: true
    },
    hasSubMenu: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isMenuActive: false
    };
  },
  methods: {
    toogleAppMenu() {
      this.isMenuActive = !this.isMenuActive;
      this.$emit("appMenuCollapseAction");
    }
  },
};
</script>
<style lang="scss">
@import "~@shared/css/colors.scss";
.left-menu-item {
  display: flex;
  background-color: $soft;
  color: $white;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom-style: solid !important;
  border-color: $white !important;
  border-width: 0.05rem !important;
  align-items: center;
}
.left-menu-item-icon {
  color: $white;
  font-size: 1.3rem;
}
.left-menu-item:hover {
  background-color: $white;
}
.left-menu-item-text {
  color: black;
  font-size: 1.2rem;
  padding-left: 1rem;
}
</style>
