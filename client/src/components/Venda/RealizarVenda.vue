<template>
  <div class="form">
    <div class="form-header">
      <HeaderTitle :title="'Realizar Venda'" />
    </div>
    <div class="form-body">
      <div class="form-body-content">
        <div class="form-body-content-item">
          <SelectField
            :labelButton="'Incluir Clientes'"
            :label="'Nome do Cliente'"
            :selectOptions="clientes"
            :hasButton="true"
            :href="'/clienteform'"
            v-model="data.cliente"
          />
        </div>
        <div class="form-body-content-item">
          <SelectField
            :labelButton="'Incluir Vendedor'"
            :label="'Nome do Vendedor'"
            :selectOptions="vendedores"
            :hasButton="true"
            :href="'/vendedorform'"
            v-model="data.vendedor"
          />
        </div>
        <div class="form-body-content-item">
          <SelectField
            :label="'Produto'"
            :selectOptions="produtos"
            v-model="produtos"
          />
          <InputField
            v-if="produtos"
            :type="'number'"
            :label="'Quantidade'"
            v-model="data.quantidade"
          />
          <InputField
            v-if="data.quantidade"
            :type="'number'"
            :label="'Total R$'"
            :readOnly="true"
          />
        </div>
        <div class="form-footer">
          <div class="form-footer-button">
            <button class="button">
              <span>Salvar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import HeaderTitle from "../SharedComponent/HeaderTitle.vue";
import SelectField from "../SharedComponent/SelectField.vue";
import InputField from "../SharedComponent/InputField.vue";
export default {
  name: "RealizarVenda",
  components: {
    HeaderTitle,
    SelectField,
    InputField,
  },
  data() {
    return {
      clientes: ["", "Manoel"],
      vendedores: ["", "Joao"],
      data: {},
      produtos: ["", "lapis de cor azul"],
      quantidade: [],
    };
  },
};
</script>
<style lang="scss">
.form {
  display: flex;
  width: 100%;
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
  flex-grow: 1;
}
.form-body-content-item {
  display: flex;
}
.form-footer {
  display: flex;
  // justify-content: center;
  // margin-left: 1rem;
  // margin-right: 1rem;
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