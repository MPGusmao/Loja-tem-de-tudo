<template>
  <div class="form">
    <div class="form-header">
      <HeaderTitle :title="'Produtos'" />
    </div>
    <div class="form-body">
      <div class="form-body-item">
        <div class="form-body-column">
          <div class="form-body-column-item">
            <InputField
              :label="'Nome do Produto'"
              v-model="data.NOME_PRODUTO"
              :value="data.NOME_PRODUTO"
            />
          </div>
          <div class="form-body-column-item">
            <InputField :label="'Descrição'" v-model="data.DESCRICAO" :value="data.DESCRICAO" />
          </div>
          <div class="form-body-column-item">
            <InputField :label="'Marca'" v-model="data.MARCA" :value="data.MARCA" />
          </div>
          <div class="form-body-column-item">
            <InputField :label="'Fornecedor'" v-model="data.FORNECEDOR" :value="data.FORNECEDOR" />
          </div>
          <div class="form-body-column-item">
            <InputField
              :label="'Classificação'"
              v-model="data.CLASSIFICACAO"
              :value="data.CLASSIFICACAO"
            />
          </div>
          <div class="form-body-column-item">
            <InputField
              :label="'Preço custo'"
              v-model="data.PRECO_CUSTO"
              :value="data.PRECO_CUSTO"
            />
          </div>
          <div class="form-body-column-item">
            <InputField
              :label="'Preço venda'"
              v-model="data.PRECO_VENDA"
              :value="data.PRECO_VENDA"
            />
          </div>
          <div class="form-body-column-item">
            <InputField
              :label="'Quantidade em estoque'"
              v-model="data.QTDE_ESTOQUE"
              :value="data.QTDE_ESTOQUE"
            />
          </div>
          <div class="form-body-column-item">
            <InputField
              :label="'Quantidade na Loja'"
              v-model="data.QTDE_LOJA"
              :value="data.QTDE_LOJA"
            />
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button" @click="salvar()">Salvar</button>
            </div>
            <div class="control">
              <button class="button" v-if="this.data.ID" @click="remove()">Remove</button>
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
import axios from "axios";
export default {
  name: "ProdutoForm",
  components: {
    HeaderTitle,
    InputField,
  },
  data() {
    return {
      data: {
        id: this.$route.query.id,
      },
    };
  },
  methods: {
    salvar() {
      const config = {
        method: "post",
        data: this.data,
      };
      if (this.data.ID) {
        config.url = "/api/produto/update";
      } else {
        config.url = "/api/produto/insert";
      }
      axios(config)
        .then((result) => {
          this.$router.push({
            name: "Produto",
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
        name: "Produto",
        query: {
          name: this.$route.query.name,
        },
      });
    },
    remove() {
      axios({
        method: "post",
        url: "/api/produto/remove",
        data: this.$route.query,
      })
        .then((result) => {
          this.$router.push({
            name: "Produto",
            query: {
              name: this.$route.query.name,
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    if (this.data.id) {
      axios({
        method: "post",
        url: "/api/produto/byid",
        data: this.$route.query,
      })
        .then((result) => {
          const parsedData = result.data.data.map((item) => {
            const clone = { ...item };
            clone.ID = this.$route.query.id;
            return clone;
          });
          this.data = parsedData[0];
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>
<style lang="scss">
</style>