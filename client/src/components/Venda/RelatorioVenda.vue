<template>
  <div class="form">
    <div class="form-header">
      <HeaderTitle :title="'Relatório de Vendas'" />
    </div>
    <div class="form-body">
      <div class="form-body-content">
        <div class="form-body-content-item">
          <div class="form-body-content-item-calendar">
            <InputField :type="'date'" v-model="data.dataIni" />
            <InputField :type="'date'" v-model="data.dataFim" />
          </div>
        </div>
        <div class="form-body-content-item">
          <InputField :label="'Total de Vendas'" :readOnly="true" />
          <InputField :label="'Lucro Semanal'" :readOnly="true" />
        </div>
        <div class="form-body-content-item">
          <DataTable
            :hasTitle="true"
            :title="'Melhores Clientes'"
            :columns="columnsClientes"
            :data="clientes"
          />
          <DataTable
            :hasTitle="true"
            :title="'Melhores Vendedores'"
            :columns="columnsVendedores"
            :data="vendedores"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponent/HeaderTitle.vue";
import DataTable from "../SharedComponent/DataTable.vue";
import InputField from "../SharedComponent/InputField.vue";
export default {
  name: "RelatorioVenda",
  components: {
    HeaderTitle,
    DataTable,
    InputField,
  },
  data() {
    return {
      columnsClientes: ["Cliente", "Valor"],
      columnsVendedores: ["Vendedor", "Valor"],
      clientes: [
        {
          cliente: "Manoel",
          valor: "50,00",
        },
        {
          cliente: "Jose",
          valor: "40,00",
        },
        {
          cliente: "Joao",
          valor: "20,00",
        },
      ],
      vendedores: [
        {
          vendedor: "Jose",
          valor: "100,00",
        },
        {
          vendedor: "Mario",
          valor: "200,00",
        },
      ],
      data: {},
    };
  },
  mounted() {},
};
</script>
<style lang="scss">
.form {
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: column;
}
.form-body {
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  flex-direction: column;
  border-top: solid 0.1rem white;
  align-content: center;
  width: 100%;
}
.form-body-content {
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #ededed;
}
.form-body-content-item {
  display: flex;
  padding-top: 1rem;
}
.form-body-content-item-calendar {
  display: flex;
}
.form-footer {
  display: flex;
  background-color: #ededed;
  margin-left: 1rem;
  margin-right: 1rem;
}
.form-footer-button {
  font-size: 1rem;
}
.button {
  font-size: 1.5rem;
  margin: 1rem;
  background-color: #0076ff;
  border-radius: 0.2rem;
  border: 0;
  box-shadow: none;
  color: white;
  cursor: pointer;
}
.button:hover {
  background-color: white;
  border: solid 0rem #0076ff;
  color: #0076ff;
}
</style>