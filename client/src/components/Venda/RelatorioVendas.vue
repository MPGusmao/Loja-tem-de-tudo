<template>
  <div class="relatoriovenda">
    <div class="relatoriovenda-content">
      <HeaderTitle :title="'Relatório de Vendas'" />
      <div class="relatoriovenda-content-info">
        <span
          >Relatório de <strong>{{ data.DATE_INI }}</strong> a
          <strong>{{ data.DATE_FIM }}</strong></span
        >
        <span v-if="data.TOTAL"
          >Total Vendido:
          <strong>{{ "R$: " + data.TOTAL.toFixed(2) }}</strong></span
        >
        <span v-if="!data.TOTAL"
          >Total Vendido: <strong>{{ "R$: 0,00" }}</strong></span
        >
        <span v-if="data.LUCRO"
          >Lucro dos Produtos:
          <strong> {{ "R$: " + data.LUCRO }} </strong></span
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
      profit: [],
    };
  },
  mounted() {
    this.data.DATE_INI = this.$route.query.dateIni;
    this.data.DATE_FIM = this.$route.query.dateFim;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const reducerSub = (accumulator, currentValue) =>
      accumulator - currentValue;

    const config = {
      method: "post",
      url: "/api/venda/report",
      data: this.$route.query,
    };
    axios(config)
      .then((result) => {
        let valor = [];
        this.clients = result.data.data;
        for (let i = 0; i < this.clients.length; i++) {
          valor.push(parseFloat(this.clients[i].VALOR));
        }
        this.data.TOTAL = valor.reduce(reducer);
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

    const configProfit = {
      method: "post",
      url: "/api/venda/reportProfit",
      data: this.$route.query,
    };
    axios(configProfit)
      .then((result) => {
        let valor = [];
        this.profit = result.data.data;
        for (let i = 0; i < this.profit.length; i++) {
          valor.push(
            parseFloat(
              this.profit[i].QTDE * parseFloat(this.profit[i].PRECO_CUSTO)
            )
          );
        }
        valor = valor.reduce(reducer);
        this.data.LUCRO = (this.data.TOTAL - valor).toFixed(2);
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
  background-color: #e6e6e6;
  flex-direction: column;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.relatoriovenda-content-info {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  font-size: 1.1rem;
  border: solid 1rem;
  border-color:  #e6e6e6;
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
  border-color: #e6e6e6;
  border-width: 1rem 1rem 0.5rem 1rem;
  background-color: white;
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