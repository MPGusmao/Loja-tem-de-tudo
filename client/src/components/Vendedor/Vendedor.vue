<template>
  <div>
    <div class="form">
      <div class="form-header">
        <HeaderTitle :title="'Consultar Vendedores'" />
      </div>
      <DataTable :columns="columns" :data="data" :route="'VendedorForm'" />
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponent/HeaderTitle.vue";
import DataTable from "../SharedComponent/DataTable.vue";
import axios from "axios";
export default {
  name: "Vendedor",
  components: {
    DataTable,
    HeaderTitle,
  },
  data() {
    return {
      columns: ["ID", "Nome do Vendedor"],
      data: [],
    };
  },
  mounted() {
    axios
      .get("/api/vendedor/all")
      .then((result) => {
        this.data = result.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>