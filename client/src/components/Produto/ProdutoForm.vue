<template>
  <div class="produtoform">
    <div class="produtoform-content">
      <HeaderTitle :title="'Novo Produto'" />
      <div class="produtoform-content-item">
        <InputField
          :label="'Nome do Produto:'"
          :placeholder="'Nome do Produto'"
        />
      </div>
      <div class="produtoform-content-item">
        <InputField :label="'Descrição:'" :placeholder="'Descricao'" />
      </div>
      <div class="produtoform-content-item">
        <InputField :label="'Marca:'" :placeholder="'Marca'" />
      </div>
      <div class="produtoform-content-item">
        <InputField :label="'Fornecedor:'" :placeholder="'Fornecedor'" />
      </div>
      <div class="produtoform-content-item">
        <InputField :label="'Classificaçao:'" :placeholder="'Classificação'" />
      </div>
      <div class="produtoform-content-item">
        <InputField
          :type="'value'"
          :label="'Preço de Custo:'"
          :placeholder="'Preço de Custo'"
        />
      </div>
      <div class="produtoform-content-item">
        <InputField
          :type="'value'"
          :label="'Preço de Venda:'"
          :placeholder="'Preço de Venda'"
        />
      </div>
      <div class="produtoform-content-item">
        <InputField
          :type="'number'"
          :label="'Quantidade na Loja:'"
          :placeholder="'Quantidade na Loja'"
        />
      </div>
      <div class="produtoform-content-item">
        <InputField
          :type="'number'"
          :label="'Quantidade no Estoque:'"
          :placeholder="'Quantidade no Estoque'"
        />
      </div>
      <div class="produtoform-footer">
        <div class="produtoform-footer-button">
          <button class="produtoform-footer-button-button">
            <span>Salvar</span>
          </button>
        </div>
        <div v-if="data.ID" class="produtoform-footer-button">
          <button class="produtoform-footer-button-button">
            <span>Excluir Produto</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponents/HeaderTitle.vue";
import InputField from "../SharedComponents/InputField.vue";
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
.produtoform {
  display: flex;
  padding-top: 0.1rem;
}
.produtoform-content {
  display: flex;
  width: 1000px;
  margin: auto;
  background-color: white;
  flex-direction: column;
}
.produtoform-content-item {
  display: flex;
  width: 100%;
}
.produtoform-footer {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.produtoform-footer-button {
  display: flex;
  padding-left: 1rem;
}
.produtoform-footer-button-button {
  display: flex;
  font-size: 1.4rem;
  cursor: pointer;
  background-color: #656565;
  border-style: solid;
  border-width: 0.01rem;
  border-radius: 0.2rem;
  color: #ededed;
}
.produtoform-footer-button-button:hover {
  color: black;
}
</style>