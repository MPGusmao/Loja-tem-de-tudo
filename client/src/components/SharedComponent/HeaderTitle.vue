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
  background-color: #ededed;
  justify-content: center;
  border-top: solid 0.5rem white;
  border-left: solid 1rem white;
  border-right: solid 1rem white;
}
.header-title-item {
  font-size: 3rem;
}
</style>