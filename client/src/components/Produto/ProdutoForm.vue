<template>
  <div class="form">
    <div class="form-header">
      <HeaderTitle :title="'Novo Produto'" />
    </div>
    <div class="form-body">
      <div class="form-body-content">
        <div class="form-body-content-item">
          <InputField :label="'Nome do Produto'" />
          <InputField :label="'Descrição'" />
        </div>
        <div class="form-body-content-item">
          <InputField :label="'Marca'" />
          <InputField :label="'Fornecedor'" />
        </div>
      </div>
      <div class="form-body-content">
        <div class="form-body-content-item">
          <InputField :label="'Classificação'" />
          <InputField :type="'number'" :label="'Preço Custo'" />
        </div>
        <div class="form-body-content-item">
          <InputField :type="'number'" :label="'Preço Custo'" />
          <InputField :type="'number'" :label="'Quantidade de Estoque'" />
          <InputField :type="'number'" :label="'Quantidade na Loja'" />
        </div>
        <div class="form-footer">
          <div class="form-footer-button">
            <button class="button">
              <span>Salvar</span>
            </button>
          </div>
          <div v-show="data.ID" class="form-footer-button">
            <button class="button">
              <span>Excluir Produto</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponent/HeaderTitle.vue";
import InputField from "../SharedComponent/InputField.vue";
export default {
  name: "ProdutoForm",
  components: {
    HeaderTitle,
    InputField,
  },
  data() {
    return {
      data: {},
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
}
.form-body-content-item {
  display: flex;
}
.form-footer {
  display: flex;
  background-color: #ededed;
  justify-content: center;
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
  color: #0076ff;
}
</style>