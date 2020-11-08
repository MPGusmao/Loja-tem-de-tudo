<template>
  <div class="vendedorform">
    <div class="vendedorform-content">
      <HeaderTitle :title="'Novo Vendedor'" />
      <div class="vendedorform-content-item">
        <InputField
          :label="'Nome do Vendedor:'"
          v-model="data.NOME_VENDEDOR"
          :placeholder="'Nome do Vendedor'"
          :$v="$v.data.NOME_VENDEDOR"
          :validate="true"
        />
      </div>
      <div class="vendedorform-footer">
        <div class="vendedorform-footer-button">
          <button class="vendedorform-footer-button-button" @click="save()">
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
  nome_vendedor: { required: true },
};
export default {
  name: "Vendedor",
  components: {
    HeaderTitle,
    InputField,
  },
  validations() {
    return {
      data: {
        NOME_VENDEDOR: {
          required: restrictions.nome_vendedor.required ? required : undefined,
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
      if (!this.data.NOME_VENDEDOR) {
        const config = {
          method: "post",
          url: "/api/vendedor/create",
          data: this.data,
        };
        axios(config)
          .then((result) => {
            this.$router.push({
              name: "RealizarVenda",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style>
.vendedorform {
  display: flex;
}
.vendedorform-content {
  display: flex;
  width: 1000px;
  margin: auto;
  background-color: white;
  flex-direction: column;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.vendedorform-content-item .input-field {
  width: 100%;
}
.vendedorform-content-item .input-field-content-item-label {
  width: 25%;
}
.vendedorform-footer {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.vendedorform-footer-button {
  display: flex;
  padding-left: 1rem;
}
.vendedorform-footer-button-button {
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
.vendedorform-footer-button-button:hover {
  color: black;
}
</style>