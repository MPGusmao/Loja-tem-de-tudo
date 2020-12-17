<template>
  <div class="produto">
    <div class="produto-content">
      <HeaderTitle :title="'Produtos'" />
      <div class="produto-content-search">
        <InputField
          :placeholder="'Pesquisar Produto'"
          v-model="search"
          @onChange="querySearch($event)"
        />
      </div>
      <div v-for="(item, index) in searchData" :key="index">
        <ProdutoItem :item="item" :href="'ProdutoForm'" />
      </div>
    </div>
  </div>
</template>
<script>
import ProdutoItem from "./ProdutoItem.vue";
import HeaderTitle from "../SharedComponents/HeaderTitle.vue";
import InputField from "../SharedComponents/InputField.vue";
import axios from "axios";
export default {
  name: "Produto",
  components: {
    ProdutoItem,
    HeaderTitle,
    InputField,
  },
  data() {
    return {
      data: [],
      search: null,
      searchData: [],
    };
  },
  methods: {
    querySearch(event) {
      if (event !== "") {
        this.searchData = this.data.filter((item) => {
          const check =
            item.NOME_PRODUTO.toLowerCase().match(event.toLowerCase(), "g") !==
            null;
          return check;
        });
      } else this.searchData = this.data;
    },
  },
  mounted() {
    const config = {
      method: "get",
      url: "/api/produto/product",
    };
    axios(config)
      .then((result) => {
        this.data = result.data.data;
        this.searchData = result.data.data;
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
  background-color: #e6e6e6;
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