<template>
  <div class="realizarvendaform">
    <div class="realizarvendaform-content">
      <HeaderTitle :title="'Realizar Vendas'" />
      <div class="realizarvendaform-content-item">
        <SelectField :label="'Cliente:'" :selectOptions="clientes" />
      </div>
      <div class="realizarvendaform-content-item">
        <SelectField :label="'Vendedor:'" :selectOptions="clientes" />
      </div>
      <div class="realizarvendaform-content-item">
        <SelectField :label="'Produto:'" :selectOptions="produtos" />
      </div>
      <div class="realizarvendaform-content-item">
        <div class="realizarvendaform-content-button">
          <div class="realizarvendaform-content-button-button">
            <button class="realizarvendaform-button">
              <span>Gravar Venda</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponents/HeaderTitle.vue";
import SelectField from "../SharedComponents/SelectField.vue";
import InputField from "../SharedComponents/InputField.vue";
export default {
  name: "RealizarVenda",
  components: {
    HeaderTitle,
    SelectField,
    InputField,
  },
  data() {
    return {
      clientes: ["Manoel", "Bruna", "Jose"],
      produtos: ["Caderno 10 materias", "Estojo", "Vaso de flor"],
    };
  },
};
</script>
<style lang="scss">
.realizarvendaform {
  display: flex;
}
.realizarvendaform-content {
  display: flex;
  width: 1000px;
  margin: auto;
  background-color: white;
  flex-direction: column;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.realizarvendaform-content-item {
  display: flex;
}
.realizarvendaform-content-item .select-field {
  width: 50%;
}
.realizarvendaform-content-button {
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.realizarvendaform-content-button-button {
  display: flex;
  padding-left: 1rem;
}
.realizarvendaform-button {
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
.realizarvendaform-button:hover {
  color: black;
}
</style>