<template>
  <div class="form">
    <div class="form-header">
      <HeaderTitle :title="'Cadastrar Produtos'" />
    </div>
    <div class="form-body">
      <div class="form-body-item">
        <InputField :label="'Nome do Produto'" />
      </div>
      <div class="form-body-item">
        <InputField :label="'Descrição'" />
      </div>
      <div class="form-body-item">
        <InputField :label="'Marca'" />
      </div>
      <div class="form-body-item">
        <InputField :label="'Fornecedor'" />
      </div>
      <div class="form-body-item">
        <InputField :label="'Classificação'" />
      </div>
      <div class="form-body-item">
        <InputField :label="'Preço Custo'" />
      </div>
      <div class="form-body-item">
        <InputField :label="'Preço de Venda'" />
      </div>
      <div class="form-body-item">
        <InputField :type="'number'" :label="'Quantidade de Estoque'" />
      </div>
      <div class="form-body-item">
        <InputField :type="'number'" :label="'Quantidade na Loja'" />
      </div>
    </div>
    <div class="form-footer">
      <div class="form-footer-button">
        <button class="button">
          <span>Salvar</span>
        </button>
      </div>
      <div class="form-footer-button">
        <button class="button">
          <span>Cancelar</span>
        </button>
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
  background-color: #ededed;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  border-top: solid 0.5rem white;
  align-content: center;
}
.form-body-item {
  display: flex;
  padding-top: 2rem;
  margin-top: 0.5rem;
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
  font-size: 1.7rem;
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
  border: solid 0.1rem #0076ff;
  color: #0076ff;
}
</style>