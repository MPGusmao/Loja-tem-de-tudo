<template>
  <div class="form">
    <div class="form-header">
      <HeaderTitle v-if="!this.data.ID" :title="'Novo Produto'" />
      <HeaderTitle v-if="this.data.ID" :title="'Editar Produto'" />
    </div>
    <div class="form-body">
      <div class="form-body-content">
        <div class="form-body-content-item">
          <InputField :label="'Nome do Produto'" v-model="data.NOME_PRODUTO" />
          <InputField :label="'Descrição'" v-model="data.DESCRICAO" />
        </div>
        <div class="form-body-content-item">
          <InputField :label="'Marca'" v-model="data.MARCA" />
          <InputField :label="'Fornecedor'" v-model="data.FORNECEDOR" />
        </div>
      </div>
      <div class="form-body-content">
        <div class="form-body-content-item">
          <InputField :label="'Classificação'" v-model="data.CLASSIFICACAO" />
          <InputField
            :type="'number'"
            :label="'Preço Custo'"
            v-model="data.PRECO_CUSTO"
          />
        </div>
        <div class="form-body-content-item">
          <InputField
            :type="'number'"
            :label="'Preço Venda'"
            v-model="data.PRECO_VENDA"
          />
          <InputField
            :type="'number'"
            :label="'Quantidade de Estoque'"
            v-model="data.QTDE_ESTOQUE"
          />
          <InputField
            :type="'number'"
            :label="'Quantidade na Loja'"
            v-model="data.QTDE_LOJA"
          />
        </div>
        <div class="form-footer">
          <div class="form-footer-button">
            <button class="button" @click="salvar()">
              <span>Salvar</span>
            </button>
          </div>
          <div v-show="data.ID" class="form-footer-button">
            <button class="button" @click="remove()">
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
      const configAxios = {
        method: "post",
        data: this.data,
      };
      if (this.data.ID) {
        configAxios.url = "/api/produto/update";
      } else {
        configAxios.url = "/api/produto/create";
      }
      axios(configAxios)
        .then((result) => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    remove() {
      axios({
        method: "post",
        url: "/api/produto/remove",
        data: this.$route.query,
      })
        .then((result) => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    if (this.data.id) {
      axios
        .post("/api/produto/byid", this.data)
        .then((result) => {
          this.data = result.data.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    }
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