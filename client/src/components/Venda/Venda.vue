<template>
  <div class="vendaform">
    <div class="vendaform-content">
      <HeaderTitle :title="'Vendas'" />
      <div class="vendaform-content-item-date">
        <InputField :type="'date'" />
        <InputField :type="'date'" />
      </div>
      <div class="vendaform-content-item">
        <div class="vendaform-content-button">
          <router-link to="/" class="vendaform-content-button-button">
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
      columns: ["Data", "Cliente", "Itens", "Valor", "Vendedor"],
      data: [
        {
          data: "10/10/2020",
          nomeCliente: "Manoel",
          itens: "Caderno 10 materias azul",
          valor: "R$ 25,00",
          vendedor: "Joazinho",
        },
        {
          data: "11/10/2020",
          nomeCliente: "Bruno",
          itens: "Caderneta de anotações",
          valor: "R$ 15,00",
          vendedor: "Joazinho",
        },
        {
          data: "13/10/2020",
          nomeCliente: "Jose",
          itens: "Pacote de sulfites 500 folhas",
          valor: "R$ 30,00",
          vendedor: "Joaquim",
        },
      ],
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