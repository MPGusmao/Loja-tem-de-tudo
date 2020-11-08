<template>
  <div class="realizarvendaform">
    <div class="realizarvendaform-content">
      <HeaderTitle :title="'Realizar Vendas'" />
      <div class="realizarvenda-form-content-item">
        <div class="realizarvendaform-content-button">
          <router-link
            to="/cliente"
            class="realizarvendaform-content-button-button"
          >
            <button class="realizarvendaform-button">
              <span>Novo Cliente</span>
            </button>
          </router-link>
          <router-link
            to="/vendedor"
            class="realizarvendaform-content-button-button"
          >
            <button class="realizarvendaform-button">
              <span>Novo Vendedor</span>
            </button>
          </router-link>
        </div>
      </div>
      <div class="realizarvendaform-content-item">
        <SelectField
          :label="'Cliente:'"
          :selectOptions="clientes"
          v-model="data.NOME_CLIENTE"
        />
      </div>
      <div class="realizarvendaform-content-item">
        <SelectField
          :label="'Vendedor:'"
          :selectOptions="vendedores"
          v-model="data.NOME_VENDEDOR"
        />
      </div>
      <div class="realizarvendaform-content-item">
        <SelectField
          :label="'Produto:'"
          :selectOptions="produtos"
          v-model="data.NOME_PRODUTO"
        />
      </div>
      <!-- <div class="realizarvendaform-content-item">
        <InputField
          :type="'number'"
          :label="'Quantidade:'"
          :selectOptions="produtos"
        />
        <InputField
          :type="'number'"
          :label="'Valor:'"
          :selectOptions="produtos"
        />
      </div> -->
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
import axios from "axios";
export default {
  name: "RealizarVenda",
  components: {
    HeaderTitle,
    SelectField,
    InputField,
  },
  data() {
    return {
      data: {},
      clientes: [""],
      vendedores: [""],
      produtos: [""],
    };
  },
  mounted() {
    const config = {
      method: "get",
      url: "/api/cliente/all",
    };
    axios(config)
      .then((result) => {
        for (let i = 0; i < result.data.data.length; i++) {
          this.clientes.push(result.data.data[i].NOME_CLIENTE);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    const configVendedor = {
      method: "get",
      url: "/api/vendedor/all",
    };
    axios(configVendedor)
      .then((result) => {
        for (let i = 0; i < result.data.data.length; i++) {
          this.vendedores.push(result.data.data[i].NOME_VENDEDOR);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    const configProdutos = {
      method: "get",
      url: "/api/produto/product",
    };
    axios(configProdutos)
      .then((result) => {
        for (let i = 0; i < result.data.data.length; i++) {
          this.produtos.push(result.data.data[i].NOME_PRODUTO);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
  width: 100%;
}
.realizarvendaform-content-button {
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.realizarvendaform-content-button-button {
  display: flex;
  padding-left: 1rem;
  text-decoration: none;
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