<template>
  <div class="produto">
    <div class="produto-content">
      <div class="produto-content-search">
        <InputField :placeholder="'Pesquisar produto'" />
      </div>
      <div v-for="(item, index) in data" :key="index">
        <ProdutoItem :item="item" :href="'ProdutoForm'" />
      </div>
    </div>
  </div>
</template>
<script>
import ProdutoItem from "./ProdutoItem.vue";
import InputField from "../SharedComponents/InputField.vue";
import axios from "axios";
export default {
  name: "Produto",
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
      .get("/api/produto/product")
      .then((result) => {
        this.data = result.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style>
.produto {
  display: flex;
}
.produto a {
  text-decoration: none;
}
.produto-content {
  display: flex;
  height: 100%;
  width: 1000px;
  margin: auto;
  flex-wrap: wrap;
}
.produto-content-search {
  display: flex;
  width: 100%;
  margin-bottom: 0.5rem;
  background-color: #e6e6e6;
}
.produto-content-search .input-field {
  width: 100%;
}
</style>