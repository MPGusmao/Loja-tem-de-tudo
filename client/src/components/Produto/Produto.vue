<template>
  <div class="produto">
    <div class="produto-content">
      <div class="produto-content-search">
        <InputField :placeholder="'Pesquisar produto'" />
      </div>
      <div v-for="(item, index) in produtos" :key="index">
        <ProdutoItem :item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import ProdutoItem from "./ProdutoItem.vue";
import InputField from "../SharedComponents/InputField.vue";
export default {
  name: "Produto",
  components: {
    ProdutoItem,
    InputField,
  },
  data() {
    return {
      produtos: [
        {
          categoria: "Papelaria",
          produto: "Caderno 10 materias",
          descricao: "Caderno 10 materias 3 cores",
          valor: "R$: 15,00",
        },
        {
          categoria: "Papelaria",
          produto: "Sulfite",
          descricao: "Pacote de sulfites com 500 folhas",
          valor: "R$: 25,00",
        },
        {
          categoria: "Material",
          produto: "Tinta Coral",
          descricao: "Tinta coral azul marinho",
          valor: "R$: 150,00",
        },
        {
          categoria: "Papelaria",
          produto: "Caderneta",
          descricao: "Caderneta de anotacoes",
          valor: "R$: 10,00",
        },
      ],
    };
  },
};
</script>
<style>
.produto {
  display: flex;
}
.produto a {
  text-decoration: none;
}
.produto-content {
  display: flex;
  height: 100%;
  width: 1000px;
  margin: auto;
  flex-wrap: wrap;
}
.produto-content-search {
  display: flex;
  width: 100%;
  margin-bottom: 0.5rem;
  background-color: #e6e6e6;
}
.produto-content-search .input-field {
  width: 100%;
}
</style>