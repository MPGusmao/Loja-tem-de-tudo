<template>
  <div class="modal">
    <div class="modal-header">
      <HeaderTitle class="modal-header-label" :title="'Novo Cliente'" />
    </div>
    <div class="modal-body">
      <div class="modal-body-item">
        <div class="modal-form-body-column">
          <div class="modal-form-column-item">
            <InputField
              :label="'Nome do Cliente'"
              v-model="data.NOME_CLIENTE"
            />
          </div>
          <div class="modal-form-column-item">
            <InputField :label="'Endereco'" v-model="data.ENDERECO" />
          </div>
          <div class="modal-form-column-item">
            <InputField
              :type="'number'"
              :label="'Telefone'"
              v-model="data.TELEFONE"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="form-footer">
      <div class="form-footer-button">
        <button class="button" @click="salvar()">
          <span>Salvar</span>
        </button>
      </div>
      <div class="form-footer-button">
        <button class="button" @click="cancel()">
          <span>Cancelar</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "../SharedComponent/HeaderTitle.vue";
import InputField from "../SharedComponent/InputField.vue";
import axios from "axios";
export default {
  name: "ClienteForm",
  components: {
    HeaderTitle,
    InputField,
  },
  data() {
    return {
      data: {},
    };
  },
  methods: {
    salvar() {
      axios
        .post("/api/cliente/create", this.data)
        .then((result) => {
          this.$router.push("/realizarvenda");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancel() {
      this.$router.push("/realizarvenda");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@shared/css/colors.scss";
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  flex-flow: column;
  min-height: calc(100vh - 9.9rem);
  transition: opacity 0.3s ease;
  justify-content: center;
}
.modal-header {
  background-color: #ededed;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 50%;
  text-align: center;
  align-self: center;
}
.modal-header-label {
  border: 0rem;
}
.modal-body {
  display: flex;
  background-color: #ededed;
  flex-wrap: wrap;
  flex-direction: column;
  width: 50%;
  box-sizing: border-box;
  align-self: center;
  justify-content: center;
}
.modal-body-item {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.modal-form-body-column {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #ededed;
  justify-content: center;
  text-align: left;
}
.modal-form-body-column-label {
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
}
.modal-form-column-item {
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
.modal-footer {
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #ededed;
  flex-wrap: wrap;
  align-self: center;
  width: 50%;
}
.form-footer {
  display: flex;
  width: 50%;
  background-color: #ededed;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 1rem;
  align-self: center;
}
.form-footer-button {
  font-size: 1rem;
  align-self: center;
}
.button {
  font-size: 1.7rem;
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