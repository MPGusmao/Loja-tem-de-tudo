<template>
  <div class="relatoriovenda">
    <div class="relatoriovenda-content">
      <HeaderTitle :title="'Relatório de Vendas'" />
      <div class="relatoriovenda-content-item">

        <div class="relatoriovenda-content-item-datatable">
          <DataTable
            :hasTitle="true"
            :title="'Melhores Clientes'"
            :columns="clientes"
            :data="clientesData"
          />
        </div>
        <div class="relatoriovenda-content-item-datatable">
          <DataTable
            :hasTitle="true"
            :title="'Melhores Vendedores'"
            :columns="vendedores"
            :data="vendedoresData"
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
export default {
  name: "Relatorio Vendas",
  components: {
    HeaderTitle,
    InputField,
    DataTable,
  },
  data() {
    return {
      clientes: ["Nome", "Valor"],
      vendedores: ["Nome", "Valor"],
      clientesData: [{ nome: "Manoel", valor: "R$: 100,00" }],
      vendedoresData: [{ nome: "Joaozinho", valor: "R$: 75,00" }],
    };
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