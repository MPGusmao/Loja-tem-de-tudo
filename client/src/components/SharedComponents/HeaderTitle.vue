<template>
  <div class="header-title">
    <span class="header-title-item">{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: "HeaderTitle",
  props: {
    title: { type: String, default: null },
  },
};
</script>
<style lang="scss">
@import "~@shared/css/colors.scss";
.header-title {
  display: flex;
  padding-left: 0.3rem;
  padding-top: 0.5rem;
  background-color: #e6e6e6;
}
.header-title-item {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>