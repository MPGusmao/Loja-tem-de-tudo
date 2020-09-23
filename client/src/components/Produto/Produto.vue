<template>
  <div>
    <div class="form">
      <div class="form-header">
        <HeaderTitle :title="'Consultar Produtos'" />
      </div>
      <DataTable :columns="columns" :data="data" :route="'ProdutoForm'" />
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponent/HeaderTitle.vue";
import DataTable from "../SharedComponent/DataTable.vue";
import axios from "axios";
export default {
  name: "Produto",
  components: {
    DataTable,
    HeaderTitle,
  },
  data() {
    return {
      columns: [
        "ID",
        "Nome do Produto",
        "Descriçao",
        "Marca",
        "Fornecedor",
        "Classificação",
        "Preço Custo R$",
        "Preço Venda R$",
        "Quantidade de Estoque",
        "Quantidade na Loja",
      ],
      data: [],
    };
  },
  mounted() {
    axios
      .get("/api/produto/all")
      .then((response) => {
        this.data = response.data.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>