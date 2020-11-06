<template>
  <div class="vendaform">
    <div class="vendaform-content">
      <HeaderTitle :title="'Vendas'" />
      <div class="vendaform-content-item-date">
        <InputField :type="'date'" v-model="data.dataIni" />
        <InputField :type="'date'" v-model="data.dataFim" />
        <div class="vendaform-content-item">
          <div class="vendaform-content-button">
            <router-link to="/analise" class="vendaform-content-button-button">
              <button class="vendaform-button">
                <span>Filtrar no Período</span>
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="vendaform-content-item">
        <div class="vendaform-content-button">
          <router-link
            to="/realizarvenda"
            class="vendaform-content-button-button"
          >
            <button class="vendaform-button">
              <span>Realizar Venda</span>
            </button>
          </router-link>
          <router-link to="/analise" class="vendaform-content-button-button">
            <button class="vendaform-button">
              <span>Relatório de Vendas</span>
            </button>
          </router-link>
        </div>
      </div>
      <div class="vendaform-content-item">
        <DataTable :columns="columns" :data="data" />
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponents/HeaderTitle.vue";
import DataTable from "../SharedComponents/DataTable.vue";
import InputField from "../SharedComponents/InputField.vue";
export default {
  name: "Venda",
  components: {
    HeaderTitle,
    DataTable,
    InputField,
  },
  data() {
    return {
      columns: ["Data", "Cliente", "Valor", "Vendedor"],
      data: {},
    };
  },
};
</script>
<style lang="scss">
.vendaform {
  display: flex;
}
.vendaform-content {
  display: flex;
  width: 1000px;
  margin: auto;
  background-color: white;
  flex-direction: column;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.vendaform-content-item-date {
  display: flex;
  padding-bottom: 1rem;
}
.vendaform-content-item {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.vendaform-content-button {
  display: flex;
  align-self: flex-end;
}
.vendaform-content-button a {
  text-decoration: none;
}
.vendaform-content-button-button {
  display: flex;
  padding-left: 1rem;
  text-decoration: none;
}
.vendaform-button {
  display: flex;
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: #656565;
  border-style: solid;
  border-width: 0.01rem;
  border-radius: 0.2rem;
  color: #ededed;
}
.vendaform-button:hover {
  color: black;
}
</style>