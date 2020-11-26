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
          :$v="$v.data.NOME_CLIENTE"
          :validate="true"
        />
      </div>
      <div class="realizarvendaform-content-item">
        <SelectField
          :label="'Vendedor:'"
          :selectOptions="vendedores"
          v-model="data.NOME_VENDEDOR"
          :$v="$v.data.NOME_VENDEDOR"
          :validate="true"
        />
      </div>
      <div class="realizarvendaform-content-item">
        <SelectField
          :label="'Produto:'"
          :selectOptions="produtos"
          v-model="data.NOME_PRODUTO"
          @input="getPrice"
          :$v="$v.data.NOME_PRODUTO"
          :validate="true"
        />
        <InputField
          :type="'number'"
          :label="'Quantidade:'"
          v-model="data.QTDE"
          @input="sum"
          :$v="$v.data.QTDE"
          :validate="true"
        />
        <InputField
          :type="'number'"
          :label="'Total R$:'"
          :readOnly="true"
          v-model="data.VALOR"
          :$v="$v.data.VALOR"
          :validate="true"
        />
      </div>
      <div class="realizarvendaform-content-item">
        <div class="realizarvendaform-content-button">
          <div class="realizarvendaform-content-button-button">
            <button class="realizarvendaform-button" @click="save()">
              <span>Gravar Venda</span>
            </button>
          </div>
          <div v-if="data.ID" class="realizarvendaform-content-button-button">
            <button class="realizarvendaform-button" @click="remove()">
              <span>Excluir Venda</span>
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
import { required } from "vuelidate/lib/validators";
import axios from "axios";
const restrictions = {
  nome_cliente: { required: true },
  nome_vendedor: { required: true },
  nome_produto: { required: true },
  qtde: { required: true },
  valor: { required: true },
};
export default {
  name: "RealizarVenda",
  components: {
    HeaderTitle,
    SelectField,
    InputField,
  },
  validations() {
    return {
      data: {
        NOME_CLIENTE: {
          required: restrictions.nome_cliente.required ? required : undefined,
        },
        NOME_VENDEDOR: {
          required: restrictions.nome_vendedor.required ? required : undefined,
        },
        NOME_PRODUTO: {
          required: restrictions.nome_produto.required ? required : undefined,
        },
        QTDE: {
          required: restrictions.qtde.required ? required : undefined,
        },
        VALOR: {
          required: restrictions.valor.required ? required : undefined,
        },
      },
    };
  },
  data() {
    return {
      data: {
        id: this.$route.query.id,
      },
      clientes: [],
      vendedores: [],
      produtos: [],
    };
  },
  methods: {
    getPrice() {
      const config = {
        method: "post",
        url: "/api/produto/product_price",
        data: this.data,
      };
      axios(config)
        .then((result) => {
          this.valor = result.data.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sum(value) {
      const sum = value * this.valor.PRECO_VENDA;
      this.data.VALOR = sum.toFixed(2);
    },
    save() {
      this.$v.$touch();
      if (
        this.data.NOME_CLIENTE != "" &&
        this.data.NOME_VENDEDOR != "" &&
        this.data.NOME_PRODUTO != "" &&
        this.data.QTDE != "" &&
        this.data.VALOR != ""
      ) {
        const config = {
          method: "post",
          data: this.data,
        };
        if (this.data.ID) {
          config.url = "/api/venda/update";
        } else {
          config.url = "/api/venda/create";
        }
        axios(config)
          .then((result) => {
            this.$router.push({
              name: "Venda",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    remove() {
      const config = {
        method: "post",
        url: "/api/venda/remove",
        data: this.$route.query,
      };
      axios(config)
        .then((result) => {
          this.$router.push({
            name: "Venda",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
        if (this.data.id) {
          const config = {
            method: "post",
            url: "/api/venda/byId",
            data: this.$route.query,
          };
          axios(config)
            .then((result) => {
              this.data = result.data.data[0];
            })
            .catch((error) => {
              console.log(error);
            });
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
  background-color: #e6e6e6;
  flex-direction: column;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.realizarvendaform-content-item {
  display: flex;
  justify-content: center;
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