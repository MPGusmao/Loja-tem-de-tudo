<template>
  <div class="loginform">
    <div class="loginform-content">
      <div class="loginform-content-item">
        <InputField
          :label="'Email:'"
          v-model="data.EMAIL"
          :$v="$v.data.EMAIL"
          :validate="true"
        />
      </div>
      <div class="loginform-content-item">
        <InputField
          :label="'Senha:'"
          :type="'password'"
          v-model="data.PASSWORD"
          :$v="$v.data.PASSWORD"
          :validate="true"
        />
      </div>
      <span v-if="erro" class="loginform-content-item-req-message"
        >Acesso negado!</span
      >
      <div class="loginform-footer">
        <div class="loginform-footer-button">
          <button class="loginform-footer-button-button" @click="save()">
            <span>Entrar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputField from "../SharedComponents/InputField.vue";
import { required } from "vuelidate/lib/validators";
import axios from "axios";
const restrictions = {
  email: { required: true },
  password: { required: true },
};
export default {
  name: "Login",
  components: {
    InputField,
  },
  validations() {
    return {
      data: {
        EMAIL: { required: restrictions.email.required ? required : undefined },
        PASSWORD: {
          required: restrictions.password.required ? required : undefined,
        },
      },
    };
  },
  data() {
    return {
      data: {},
      erro: false,
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
      if (this.data.EMAIL !== "" && this.data.PASSWORD != "") {
        const config = {
          method: "post",
          url: "/api/login/byid",
          data: this.data,
        };
        axios(config)
          .then((result) => {
            this.$router.push({
              name: "Produto",
            });
          })
          .catch((error) => {
            this.erro = true;
            console.log(error);
          });
      }
    },
  },
};
</script>
<style lang="scss">
.loginform {
  display: flex;
}
.loginform-content {
  display: flex;
  width: 500px;
  margin: auto;
  align-self: center;
  background-color: white;
  flex-direction: column;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.loginform-content-item {
  display: flex;
}
.loginform-content-item .input-field {
  width: 100%;
}
.loginform-footer {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.loginform-footer-button {
  display: flex;
  padding-left: 1rem;
}
.loginform-footer-button-button {
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
.loginform-footer-button-button:hover {
  color: black;
}
.loginform-content-item-req-message {
  font-size: 1rem;
  color: red;
  padding-left: 0.4rem;
}
</style>