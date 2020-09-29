<template>
  <div class="form-card">
    <div class="form-card-content">
      <div class="form-card-body">
        <div v-for="(item, index) in produto" :key="index">
          <ProdutoItem :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProdutoItem from "../Produto/ProdutoItem.vue";
import InputField from "../SharedComponent/InputField.vue";
export default {
  nam: "Produto",
  components: {
    ProdutoItem,
    InputField,
  },
  data() {
    return {
      produto: [
        {
          categoria: "Papelaria",
          produto: "Lapis de cor azul",
          descricao: "Lapis de cor azul caixa com 20 unidades",
          valor: "R$ 20,00",
        },
        {
          categoria: "Decoracao",
          produto: "Abajur",
          descricao: "Abajur com duas lampadas",
          valor: "R$ 35,00",
        },
        {
          categoria: "Papelaria",
          produto: "Lapis de cor azul",
          descricao: "Lapis de cor azul caixa com 20 unidades",
          valor: "R$ 20,00",
        },
        {
          categoria: "Papelaria",
          produto: "Lapis de cor vermelho",
          descricao: "Lapis de cor vermelho caixa com 20 unidades",
          valor: "R$ 20,00",
        },
        {
          categoria: "Papelaria",
          produto: "Lapis de cor vermelho",
          descricao: "Lapis de cor vermelho caixa com 20 unidades",
          valor: "R$ 20,00",
        },
        {
          categoria: "Papelaria",
          produto: "Lapis de cor vermelho",
          descricao: "Lapis de cor vermelho caixa com 20 unidades",
          valor: "R$ 20,00",
        },
        {
          categoria: "Papelaria",
          produto: "Lapis de cor vermelho",
          descricao: "Lapis de cor vermelho caixa com 20 unidades",
          valor: "R$ 20,00",
        },
        {
          categoria: "Papelaria",
          produto: "Lapis de cor vermelho",
          descricao: "Lapis de cor vermelho caixa com 20 unidades",
          valor: "R$ 20,00",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.form-card {
  display: flex;
}
.form-card-header {
  display: flex;
}
.form-card-content {
  display: flex;
  background-color: #ededed;
  margin: 0.5rem 1rem 0.5rem 1rem;
  justify-content: space-between;
  flex-direction: row;
}
.form-card-content-search {
  display: flex;
  align-items: flex-start;
}
.form-card-body {
  display: flex;
  padding: 2rem 2rem 2rem 2rem;
  align-self: flex-start;
  flex-wrap: wrap;
  flex-grow: 1;
}
</style>