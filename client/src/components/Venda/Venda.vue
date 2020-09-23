<template>
  <div>
    <div class="form">
      <div class="form-header">
        <HeaderTitle :title="'Consultar Vendas'" />
      </div>
      <DataTable :columns="columns" :data="data" />
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponent/HeaderTitle.vue";
import DataTable from "../SharedComponent/DataTable.vue";
import axios from "axios";
export default {
  name: "Venda",
  components: {
    DataTable,
    HeaderTitle,
  },
  data() {
    return {
      columns: [
        "ID",
        "Cliente",
        "Data",
        "Quantidade",
        "Itens",
        "Valor",
        "Vendedor",
      ],
      data: [],
    };
  },
  mounted() {
    axios
      .get("/api/venda/all")
      .then((result) => {
        this.data = result.data.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>