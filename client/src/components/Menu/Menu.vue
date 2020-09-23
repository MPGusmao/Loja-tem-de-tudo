<template>
  <div class="menu">
    <MenuItem
      @appMenuCollapseAction="changeAppMenuCollapsePro"
      :label="'Produtos'"
      :icon="'ibm-add-new'"
      :hasSubMenu="true"
    />
    <MenuSubItem
      v-if="appMenuCollapsePro"
      :label="'Cadastrar Produto'"
      :icon="'ibm-add-new'"
      :pageName="'ProdutoForm'"
      :Name="'lojavirtual'"
    />
    <MenuSubItem
      v-if="appMenuCollapsePro"
      :label="'Consultar Produto'"
      :icon="'ibm-add-new'"
      :pageName="'Produto'"
      :Name="'lojavirtual'"
    />
    <MenuItem
      @appMenuCollapseAction="changeAppMenuCollapseCli"
      :label="'Clientes'"
      :icon="''"
      :hasSubMenu="true"
    />
    <MenuSubItem
      v-if="appMenuCollapseCli"
      :label="'Cadastrar Cliente'"
      :icon="'ibm-add-new'"
      :pageName="'ClienteForm'"
      :Name="'lojavirtual'"
    />
    <MenuSubItem
      v-if="appMenuCollapseCli"
      :label="'Consultar Cliente'"
      :icon="'ibm-add-new'"
      :pageName="'Cliente'"
      :Name="'lojavirtual'"
    />
    <MenuItem
      @appMenuCollapseAction="changeAppMenuCollapseVen"
      :label="'Vendas'"
      :icon="''"
      :hasSubMenu="true"
    />
    <MenuSubItem
      v-if="appMenuCollapseVen"
      :label="'Registrar Venda'"
      :icon="'ibm-add-new'"
      :pageName="'VendaForm'"
      :Name="'lojavirtual'"
    />
    <MenuSubItem
      v-if="appMenuCollapseVen"
      :label="'Consultar Vendas'"
      :icon="'ibm-add-new'"
      :pageName="'Venda'"
      :Name="'lojavirtual'"
    />
    <MenuItem
      @appMenuCollapseAction="changeAppMenuCollapseVend"
      :label="'Vendedor'"
      :icon="''"
      :hasSubMenu="true"
    />
    <MenuSubItem
      v-if="appMenuCollapseVend"
      :label="'Cadastrar Vendedores'"
      :icon="'ibm-add-new'"
      :pageName="'VendedorForm'"
      :Name="'lojavirtual'"
    />
    <MenuSubItem
      v-if="appMenuCollapseVend"
      :label="'Consultar Vendedores'"
      :icon="'ibm-add-new'"
      :pageName="'Vendedor'"
      :Name="'lojavirtual'"
    />
    <MenuItem :label="'Relatórios'" :icon="''" :href="'#'" />
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";
import MenuSubItem from "./MenuSubItem.vue";
export default {
  name: "Menu",
  components: {
    MenuItem,
    MenuSubItem,
  },
  data() {
    return {
      appMenuCollapsePro: false,
      appMenuCollapseCli: false,
      appMenuCollapseVen: false,
      appMenuCollapseVend: false
    };
  },
  methods: {
    changeAppMenuCollapsePro() {
      this.appMenuCollapsePro = !this.appMenuCollapsePro;
    },
    changeAppMenuCollapseCli() {
      this.appMenuCollapseCli = !this.appMenuCollapseCli;
    },
    changeAppMenuCollapseVen() {
      this.appMenuCollapseVen = !this.appMenuCollapseVen;
    },
    changeAppMenuCollapseVend() {
      this.appMenuCollapseVend = !this.appMenuCollapseVend;
    },
  },
};
</script>
<style lang="scss">
@import "~@shared/css/colors.scss";
</style>
