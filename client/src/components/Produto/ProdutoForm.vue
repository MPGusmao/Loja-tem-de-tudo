<template>
  <div class="produtoform">
    <div class="produtoform-content">
      <HeaderTitle v-if="!this.data.ID" :title="'Novo Produto'" />
      <HeaderTitle v-if="this.data.ID" :title="'Editar Produto'" />
      <div class="produtoform-content-item">
        <InputField
          :label="'Nome do Produto:'"
          :placeholder="'Nome do Produto'"
          v-model="data.NOME_PRODUTO"
          :$v="$v.data.NOME_PRODUTO"
          :validate="true"
        />
      </div>
      <div class="produtoform-content-item">
        <InputField
          :label="'Descrição:'"
          :placeholder="'Descricao'"
          v-model="data.DESCRICAO"
          :$v="$v.data.DESCRICAO"
          :validate="true"
        />
      </div>
      <div class="produtoform-content-item">
        <InputField
          :label="'Marca:'"
          :placeholder="'Marca'"
          v-model="data.MARCA"
          :$v="$v.data.MARCA"
          :validate="true"
        />
      </div>
      <div class="produtoform-content-item">
        <InputField
          :label="'Fornecedor:'"
          :placeholder="'Fornecedor'"
          v-model="data.FORNECEDOR"
          :$v="$v.data.FORNECEDOR"
          :validate="true"
        />
      </div>
      <div class="produtoform-content-item">
        <InputField
          :label="'Classificaçao:'"
          :placeholder="'Classificação'"
          v-model="data.CLASSIFICACAO"
          :$v="$v.data.CLASSIFICACAO"
          :validate="true"
        />
      </div>
      <div class="produtoform-content-item">
        <InputField
          :type="'number'"
          :label="'Preço de Custo:'"
          :placeholder="'Preço de Custo'"
          v-model="data.PRECO_CUSTO"
          :$v="$v.data.PRECO_CUSTO"
          :validate="true"
        />
      </div>
      <div class="produtoform-content-item">
        <InputField
          :type="'number'"
          :label="'Preço de Venda:'"
          :placeholder="'Preço de Venda'"
          v-model="data.PRECO_VENDA"
          :$v="$v.data.PRECO_VENDA"
          :validate="true"
        />
      </div>
      <div class="produtoform-content-item">
        <InputField
          :type="'number'"
          :label="'Quantidade na Loja:'"
          :placeholder="'Quantidade na Loja'"
          v-model="data.QTDE_LOJA"
          :$v="$v.data.QTDE_LOJA"
          :validate="true"
        />
      </div>
      <div class="produtoform-content-item">
        <InputField
          :type="'number'"
          :label="'Quantidade no Estoque:'"
          :placeholder="'Quantidade no Estoque'"
          v-model="data.QTDE_ESTOQUE"
          :$v="$v.data.QTDE_ESTOQUE"
          :validate="true"
        />
      </div>
      <div class="produtoform-footer">
        <div class="produtoform-footer-button">
          <button class="produtoform-footer-button-button" @click="save()">
            <span>Salvar</span>
          </button>
        </div>
        <div v-if="data.ID" class="produtoform-footer-button">
          <button @click="remove()" class="produtoform-footer-button-button">
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
import { required } from "vuelidate/lib/validators";
import axios from "axios";
const restrictions = {
  produto: { required: true },
  descricao: { required: true },
  marca: { required: true },
  fornecedor: { required: true },
  classificacao: { required: true },
  preco_custo: { required: true },
  preco_venda: { required: true },
  qtde_loja: { required: true },
  qtde_estoque: { required: true },
};
export default {
  name: "ProdutoForm",
  components: {
    HeaderTitle,
    InputField,
  },
  validations() {
    return {
      data: {
        NOME_PRODUTO: {
          required: restrictions.produto.required ? required : undefined,
        },
        DESCRICAO: {
          required: restrictions.descricao.required ? required : undefined,
        },
        MARCA: {
          required: restrictions.marca.required ? required : undefined,
        },
        FORNECEDOR: {
          required: restrictions.fornecedor.required ? required : undefined,
        },
        CLASSIFICACAO: {
          required: restrictions.classificacao.required ? required : undefined,
        },
        PRECO_CUSTO: {
          required: restrictions.preco_custo.required ? required : undefined,
        },
        PRECO_VENDA: {
          required: restrictions.preco_venda.required ? required : undefined,
        },
        QTDE_LOJA: {
          required: restrictions.qtde_loja.required ? required : undefined,
        },
        QTDE_ESTOQUE: {
          required: restrictions.qtde_estoque.required ? required : undefined,
        },
      },
    };
  },
  data() {
    return {
      data: {
        id: this.$route.query.id,
      },
    };
  },
  computed: {
    restrictions() {
      return restrictions;
    },
  },
  methods: {
    save() {
      this.$v.data.$touch();
      const config = {
        method: "post",
        data: this.data,
      };
      if (this.data.ID) {
        config.url = "/api/produto/update";
      } else {
        config.url = "/api/produto/create";
      }
      axios(config)
        .then((result) => {
          this.$router.push({
            name: "Produto",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    remove() {
      const config = {
        method: "post",
        url: "/api/produto/remove",
        data: this.$route.query
      };
      axios(config)
        .then((result) => {
          this.$router.push({
            name: "Produto",
          });
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
.produtoform {
  display: flex;
}
.produtoform-content {
  display: flex;
  width: 1000px;
  margin: auto;
  background-color: white;
  flex-direction: column;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.produtoform-content-item {
  display: flex;
  width: 100%;
}
.produtoform-content-item .input-field {
  width: 100%;
}
.produtoform-content-item .input-field-content-item-label {
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
  font-size: 1rem;
  padding: 0.5rem;
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