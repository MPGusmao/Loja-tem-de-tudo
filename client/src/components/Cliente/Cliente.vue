<template>
  <div>
    <div class="form">
      <div class="form-header">
        <HeaderTitle :title="'Consultar Cliente'" />
      </div>
      <DataTable :columns="columns" :data="data" :route="'ClienteForm'" />
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponent/HeaderTitle.vue";
import DataTable from "../SharedComponent/DataTable.vue";
import axios from "axios";
export default {
  name: "Cliente",
  components: {
    DataTable,
    HeaderTitle,
  },
  data() {
    return {
      columns: ["ID", "Nome do Cliente", "Endereço", "Telefone"],
      data: [],
    };
  },
  mounted() {
    axios
      .get("/api/cliente/all")
      .then((result) => {
        this.data = result.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>