<template>
  <div class="form">
    <div class="form-header">
      <HeaderTitle :title="'Vendas'" />
    </div>
    <div class="form-body">
      <div class="form-body-item">
        <div class="form-body-column">
          <div class="form-body-column-item">
            <SelectField
              :label="'Nome do cliente'"
              :selectOptions="clientes"
              v-model="data.NOME_CLIENTE"
            />
          </div>
          <div class="form-body-column-item">
            <SelectField
              :label="'Vendedor'"
              :selectOptions="vendedores"
              v-model="data.NOME_VENDEDOR"
            />
          </div>
          <div class="form-body-column-item">
            <SelectField :label="'Itens'" :selectOptions="produtos" v-model="data.PRODUTO" />
            <InputField :label="'Quantidade'" v-if="data.PRODUTO" v-model="data.QUANTIDADE" />
            <InputField :label="'Preço R$'" v-if="data.QUANTIDADE" v-model="data.VALOR" />
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button" @click="save()">Salvar</button>
            </div>
            <div class="control">
              <button class="button" @click="cancel()">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "../SharedComponent/HeaderTitle.vue";
import InputField from "../SharedComponent/InputField.vue";
import SelectField from "../SharedComponent/SelectField.vue";
import axios from "axios";
export default {
  name: "VendaForm",
  components: {
    HeaderTitle,
    InputField,
    SelectField,
  },
  data() {
    return {
      clientes: [""],
      vendedores: [""],
      data: {},
      produtos: [""],
      quantidade: [],
    };
  },
  methods: {
    save() {
      const config = {
        method: "post",
        data: this.data,
      };
      if (this.data.ID) {
        config.url = "/api/venda/update";
      } else {
        config.url = "/api/venda/insert";
      }
      axios(config)
        .then((result) => {
          this.$router.push({
            name: "Venda",
            query: {
              name: this.$route.query.name,
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancel() {
      this.$router.push({
        name: "Venda",
        query: {
          name: this.$route.query.name,
        },
      });
    },
  },
  mounted() {
    axios({
      method: "get",
      url: "/api/cliente/nameCliente",
      data: this.$route.query,
    })
      .then((result) => {
        for (let i = 0; i < result.data.data.length; i++) {
          this.clientes.push(result.data.data[i].NOME_CLIENTE);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios({
      method: "get",
      url: "/api/vendedor/name",
      data: this.$route.query,
    })
      .then((result) => {
        for (let i = 0; i < result.data.data.length; i++) {
          this.vendedores.push(result.data.data[i].NOME_VENDEDOR);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios({
      method: "get",
      url: "/api/produto/all",
      data: this.$route.query,
    })
      .then((result) => {
        for (let i = 0; i < result.data.data.length; i++) {
          this.produtos.push(result.data.data[i].DESCRICAO);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>