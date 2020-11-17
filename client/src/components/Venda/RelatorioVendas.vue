<template>
  <div class="relatoriovenda">
    <div class="relatoriovenda-content">
      <HeaderTitle :title="'Relatório de Vendas'" />
      <div class="relatoriovenda-content-item-item">
        <span
          >Relatório de <strong>{{ data.DATE_INI }}</strong> a
          <strong>{{ data.DATE_FIM }}</strong></span
        >
      </div>
      <div class="relatoriovenda-content-item-item">
        <span v-if="data.TOTAL"
          >Total Vendido: <strong>{{ data.TOTAL }}</strong></span
        >
        <span v-if="!data.TOTAL"
          >Total Vendido: <strong>{{ "R$: 0,00" }}</strong></span
        >
      </div>
      <div class="relatoriovenda-content-item-item">
        <span v-if="data.LUCRO"
          >Lucro dos Produtos: <strong> {{ data.LUCRO }} </strong></span
        >
        <span v-if="!data.LUCRO"
          >Lucro dos Produtos: <strong>{{ "R$: 0,00" }}</strong></span
        >
      </div>
      <div class="relatoriovenda-content-item">
        <div class="relatoriovenda-content-item-datatable">
          <DataTable
            :hasTitle="true"
            :title="'Melhores Clientes'"
            :columns="clientes"
            :data="clients"
          />
        </div>
        <div class="relatoriovenda-content-item-datatable">
          <DataTable
            :hasTitle="true"
            :title="'Melhores Vendedores'"
            :columns="vendedores"
            :data="salesman"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponents/HeaderTitle.vue";
import InputField from "../SharedComponents/InputField.vue";
import DataTable from "../SharedComponents/DataTable.vue";
import axios from "axios";
export default {
  name: "RelatorioVendas",
  components: {
    HeaderTitle,
    InputField,
    DataTable,
  },
  data() {
    return {
      clientes: ["Nome", "Total"],
      vendedores: ["Nome", "Total"],
      clients: [],
      salesman: [],
      data: {},
    };
  },
  mounted() {
    this.data.DATE_INI = this.$route.query.dateIni;
    this.data.DATE_FIM = this.$route.query.dateFim;

    const config = {
      method: "post",
      url: "/api/venda/report",
      data: this.$route.query,
    };
    axios(config)
      .then((result) => {
        this.clients = result.data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    const configSalesman = {
      method: "post",
      url: "/api/venda/reportSalesman",
      data: this.$route.query,
    };
    axios(configSalesman)
      .then((result) => {
        this.salesman = result.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style lang="scss">
.relatoriovenda {
  display: flex;
}
.relatoriovenda-content {
  display: flex;
  width: 1000px;
  margin: auto;
  background-color: white;
  flex-direction: column;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.relatoriovenda-content-item {
  display: flex;
  padding-bottom: 1rem;
  justify-content: center;
}
.relatoriovenda-content-item-item {
  font-size: 1.3rem;
  text-align: center;
}
.relatoriovenda-content-item-datatable {
  display: flex;
  flex-grow: 1;
  border-left-style: solid;
  border-top-style: solid;
  border-right: solid;
  border-color: white;
  border-width: 1rem 1rem 0.5rem 1rem;
  background-color: #dbdfe0;
  padding-bottom: 1rem;
  padding: 0.1rem 0.1rem 0rem 0.1rem;
  height: 500px;
}
.relatoriovenda-content-item-label {
  display: flex;
  width: 100%;
  justify-content: center;
}
.relatoriovenda-content-item-label span {
  font-size: 1.5rem;
}
p {
  color: white;
}
</style>