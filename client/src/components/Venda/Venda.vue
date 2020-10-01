<template>
  <div class="form">
    <div class="form-header">
      <HeaderTitle :title="'Vendas'" />
    </div>
    <div class="form-body">
      <div class="form-body-content">
        <div class="form-body-content-item">
          <div class="form-footer">
            <router-link to="/realizarvenda">
              <div class="form-footer-button">
                <button class="button">
                  <span>Realizar Venda</span>
                </button>
              </div>
            </router-link>
            <router-link to="/relatoriovenda">
              <div class="form-footer-button">
                <button class="button">
                  <span>Relatório de Vendas</span>
                </button>
              </div>
            </router-link>
          </div>
        </div>
        <div class="form-body-content-item">
          <DataTable :columns="columns" :data="vendas" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponent/HeaderTitle.vue";
import DataTable from "../SharedComponent/DataTable.vue";
export default {
  name: "Venda",
  components: {
    HeaderTitle,
    DataTable,
  },
  data() {
    return {
      columns: ["Cliente", "Data", "Itens", "Valor", "Vendedor"],
      vendas: [
        {
          cliente: "Jose",
          data: "20/10/2019",
          itens: "Lapis de cor azul caixa com 20 unidades",
          valor: "R$ 20,00",
          vendedor: "Matheus",
        },
        {
          cliente: "Maria",
          data: "20/09/2020",
          itens: "Lapis de cor azul caixa com 20 unidades",
          valor: "R$ 20,00",
          vendedor: "Mario",
        },
        {
          cliente: "Joana",
          data: "20/09/2020",
          itens: "Lapis de cor azul caixa com 20 unidades",
          valor: "R$ 20,00",
          vendedor: "Joao",
        },
        {
          cliente: "Jose",
          data: "20/09/2020",
          itens: "Lapis de cor azul caixa com 20 unidades",
          valor: "R$ 20,00",
          vendedor: "Pedro",
        },
        {
          cliente: "Joana",
          data: "28/09/2020",
          itens: "Lapis de cor azul caixa com 20 unidades",
          valor: "R$ 20,00",
          vendedor: "Matheus",
        },
      ],
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