<template>
  <div class="form-">
    <div class="form-body">
      <div class="form-body-content">
        <div class="form-body-content-item">
          <InputField
            :type="'search'"
            v-model="data.search"
            :placeholder="'Pesquisar Prduto'"
            @input="
              '';

            "
          />
        </div>
        <div class="form-body-content-item">
          <div v-for="(item, index) in data" :key="index">
            <ProdutoItem :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProdutoItem from "../Produto/ProdutoItem.vue";
import InputField from "../SharedComponent/InputField.vue";
import axios from "axios";
export default {
  nam: "Produto",
  components: {
    ProdutoItem,
    InputField,
  },
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    axios
      .get("/api/produto/all")
      .then((result) => {
        this.data = result.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
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
  flex-grow: 1;
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
  padding-top: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
}
.form {
  display: flex;
}
.form-card-header {
  display: flex;
}
.form-card-content {
  display: flex;
  background-color: #ededed;
  margin: 0.5rem 1rem 0.5rem 1rem;
  justify-content: space-between;
  flex-direction: row;
}
.form-card-content-search {
  display: flex;
  align-items: flex-start;
}
.form-card-body {
  display: flex;
  padding: 2rem 2rem 2rem 2rem;
  align-self: flex-start;
  flex-wrap: wrap;
  flex-grow: 1;
}
</style>