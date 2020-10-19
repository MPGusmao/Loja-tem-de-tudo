<template>
  <div class="vendaform">
    <div class="vendaform-content">
      <HeaderTitle :title="'Vendas'" />
      <div class="vendaform-content-item">
        <div class="vendaform-content-button">
          <div class="vendaform-content-button-button">
            <button class="vendaform-button">
              <span>Realizar Venda</span>
            </button>
          </div>
          <div class="vendaform-content-button-button">
            <button class="vendaform-button">
              <span>Relatório de Vendas</span>
            </button>
          </div>
        </div>
      </div>
      <div class="vendaform-content-item">
        <DataTable :columns="columns" :data="data"/>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponents/HeaderTitle.vue";
import DataTable from "../SharedComponents/DataTable.vue";
export default {
  name: "Venda",
  components: {
    HeaderTitle,
    DataTable,
  },
  data() {
    return {
      columns: ["ID", "Nome do Cliente", "Data", "Itens", "Valor", "Vendedor"],
      data: [
          {
              id: '1',
              nomeCliente: "Manoel",
              data: '10/10/2020',
              itens: 'Caderno 10 materias azul',
              valor: 'R$ 25,00',
              vendedor: 'Joazinho'
          },
          {
              id: '2',
              nomeCliente: "Bruno",
              data: '11/10/2020',
              itens: 'Caderneta de anotações',
              valor: 'R$ 15,00',
              vendedor: 'Joazinho'
          },
          {
              id: '3',
              nomeCliente: "Jose",
              data: '13/10/2020',
              itens: 'Pacote de sulfites 500 folhas',
              valor: 'R$ 30,00',
              vendedor: 'Joaquim'
          }
      ]
    };
  },
};
</script>
<style lang="scss">
.vendaform {
  display: flex;
  padding-top: 0.1rem;
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
.vendaform-content-item {
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.vendaform-content-button {
  display: flex;
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