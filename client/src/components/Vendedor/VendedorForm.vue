<template>
  <div class="modal">
    <div class="modal-header">
      <HeaderTitle class="modal-header-label" :title="'Cadastrar Vendedor'" />
    </div>
    <div class="modal-body">
      <div class="modal-body-item">
        <div class="modal-form-body-column">
          <div class="modal-form-column-item">
            <InputField :label="'Nome do Vendedor'" />
          </div>
        </div>
      </div>
    </div>
    <div class="form-footer">
      <div class="form-footer-button">
        <button class="button">
          <span>Salvar</span>
        </button>
      </div>
      <div class="form-footer-button">
        <button class="button">
          <span>Cancelar</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "../SharedComponent/HeaderTitle.vue";
import InputField from "../SharedComponent/InputField.vue";
export default {
  name: "VendedorForm",
  components: {
    HeaderTitle,
    InputField,
  },
  data() {
    return {
      selectOptions: [],
      newSelect: [],
      checked: false,
    };
  },
  methods: {
    Generate() {
      this.$emit("click", this.newSelect);
    },
    cancel() {
      window.location.reload();
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
  width: 25%;
  text-align: center;
  align-self: center;
}
.modal-header-label {
  //   color: $white;
  border: 0rem;
}
.modal-body {
  display: flex;
  background-color: #ededed;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  flex-wrap: wrap;
  flex-direction: column;
  width: 25%;
  height: 25%;
  padding-left: 1rem;
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
  width: 25%;
}
.form-footer {
  display: flex;
  width: 25%;
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
  border: solid 0.1rem #0076ff;
  color: #0076ff;
}
</style> 