<template>
  <div class="vendaform">
    <div class="vendaform-content">
      <HeaderTitle :title="'Vendas'" />
      <div class="vendaform-content-item-date">
        <InputField :type="'date'" v-model="data.DATE_INI" />
        <InputField :type="'date'" v-model="data.DATE_FIM" />
        <div class="vendaform-content-item">
          <div class="vendaform-content-button">
            <router-link to="" class="vendaform-content-button-button">
              <button class="vendaform-button" @click="filter()">
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
        <DataTable :columns="columns" :data="row" :route="'RealizarVenda'" />
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponents/HeaderTitle.vue";
import DataTable from "../SharedComponents/DataTable.vue";
import InputField from "../SharedComponents/InputField.vue";
import axios from "axios";
export default {
  name: "Venda",
  components: {
    HeaderTitle,
    DataTable,
    InputField,
  },
  data() {
    return {
      columns: ["No Venda", "Data", "Cliente", "Valor", "Vendedor"],
      data: {},
      row: [],
    };
  },
  methods: {
    filter() {
      if (this.data.DATE_INI !== "" && this.data.DATE_FIM !== "") {
        const config = {
          method: "post",
          url: "/api/venda/all",
          data: this.data,
        };
        axios(config)
          .then((result) => {
            this.row = result.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
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