<template>
  <div class="footer">
    <span class="footer-item">Desenvolvido por: Manoel Pereira</span>
  </div>
</template>
<script>
export default {
  name: "MainFooter",
};
</script>
<style lang="scss">
@import "~@shared/css/colors.scss";
.footer {
  display: flex;
  background-color: #ededed;
  justify-content: center;
  text-align: center;
  margin-top: 0.5rem;
}
.footer-item {
  font-size: 2rem;
  color: black;
}
</style>