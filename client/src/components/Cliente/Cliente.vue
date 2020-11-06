<template>
  <div class="clienteform">
    <div class="clienteform-content">
      <HeaderTitle :title="'Novo Cliente'" />
      <div class="clienteform-content-item">
        <InputField
          :label="'Nome do Cliente:'"
          v-model="data.NOME_CLIENTE"
          :placeholder="'Nome do Cliente'"
          :$v="$v.data.NOME_CLIENTE"
          :validate="true"
        />
      </div>
      <div class="clienteform-content-item">
        <InputField
          :label="'Endereço:'"
          v-model="data.ENDERECO"
          :placeholder="'Endereco'"
          :$v="$v.data.ENDERECO"
          :validate="true"
        />
      </div>
      <div class="clienteform-content-item">
        <InputField
          :label="'Telefone:'"
          v-model="data.TELEFONE"
          :placeholder="'(00)0000-00000'"
          :$v="$v.data.TELEFONE"
          :validate="true"
        />
      </div>
      <div class="produtoform-footer">
        <div class="produtoform-footer-button">
          <button class="produtoform-footer-button-button" @click="save()">
            <span>Salvar</span>
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
  nome_cliente: { required: true },
  endereco: { required: true },
  telefone: { required: true },
};
export default {
  name: "Cliente",
  components: {
    HeaderTitle,
    InputField,
  },
  validations() {
    return {
      data: {
        NOME_CLIENTE: {
          required: restrictions.nome_cliente.required ? required : undefined,
        },
        ENDERECO: {
          required: restrictions.endereco.required ? required : undefined,
        },
        TELEFONE: {
          required: restrictions.telefone.required ? required : undefined,
        },
      },
    };
  },
  data() {
    return {
      data: {},
    };
  },
  methods: {
    save() {
      this.$v.data.$touch();
      const config = {
          method: 'post',
          url: '/api/cliente/create',
          data: this.data
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
};
</script>
<style>
.clienteform {
  display: flex;
}
.clienteform-content {
  display: flex;
  width: 1000px;
  margin: auto;
  background-color: white;
  flex-direction: column;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.clienteform-content-item .input-field {
  width: 100%;
}
.clienteform-content-item .input-field-content-item-label {
  width: 25%;
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