<template>
  <router-link class="link" to="/produto">
    <div class="produto-card">
      <div class="produto-card-body">
        <div class="produto-card-body-categoria">{{ item.categoria }}</div>
        <div class="produto-card-body-item">{{ item.produto }}</div>
        <div class="produto-card-body-item">{{ item.descricao }}</div>
        <div class="produto-card-body-item">{{ item.valor }}</div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "ProdutoItem",
  props: {
    item: { type: Object },
  },
};
</script>
<style lang="scss">
.link {
  text-decoration: none;
}
.produto-card {
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 160px;
  background-color: #a3a1a1;
  margin: 0.5rem;
}
.produto-card-body {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: 0.5rem;
  overflow: hidden;
  flex-wrap: wrap;
}
.produto-card-body-categoria {
  display: flex;
  flex-grow: 1;
  font-size: 0.8rem;
  font-weight: bold;
  color: black;
  align-self: center;
}
.produto-card-body-item {
  display: flex;
  flex-grow: 1;
  font-size: 0.8rem;
  font-weight: bold;
  color: black;
}
</style>