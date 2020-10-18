<template>
  <router-link :to="href">
    <div class="produtoitem">
      <div class="produtoitem-content">
        <div class="produtoitem-content-category">{{ item.categoria }}</div>
        <div class="produtoitem-content-produto">{{ item.produto }}</div>
        <div class="produtoitem-content-descricao">{{ item.descricao }}</div>
        <div class="produtoitem-content-valor">{{ item.valor }}</div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "ProdutoItem",
  props: {
    item: { type: Object },
    href: { type: String, default: "#" },
  },
};
</script>
<style>
.produtoitem {
  display: flex;
  background-color: #e6e6e6;
  flex-direction: column;
  width: 320px;
  height: 160px;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
}
.produtoitem-content {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: 0.5rem;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
}
.produtoitem-content-category {
  display: flex;
  align-self: flex-end;
  color: blue;
  font-weight: bold;
}
.produtoitem-content-produto {
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
}
.produtoitem-content-descricao {
  display: flex;
  color: black;
}
.produtoitem-content-valor {
  display: flex;
  color: green;
  font-weight: bold;
  font-size: 1.2rem;
}
.produtoitem:hover {
  background-color: #f2f2f2;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #e6e6e6;
}
</style>