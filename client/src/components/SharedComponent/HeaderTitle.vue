<template>
  <div class="header-title">{{title}}</div>
</template>

<script>
export default {
  name: "HeaderTitle",
  props: {
    title: { type: String, default: null },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@shared/css/colors.scss";
.header-title {
  color: black;
  font-size: 2.7rem;
  text-align: center;
}
</style>