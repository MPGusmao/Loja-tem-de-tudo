<template>
  <div class="form">
    <div class="form-header">
      <HeaderTitle :title="'Cadastrar Vendedor'" />
    </div>
    <div class="form-body">
      <div class="form-body-item">
        <div class="form-body-column">
          <div class="form-body-column-item">
            <InputField
              :label="'Nome do Cliente'"
              v-model="data.NOME_VENDEDOR"
              :value="data.NOME_VENDEDOR"
            />
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button" @click="save()">Salvar</button>
            </div>
            <div class="control">
              <button class="button" @click="remove()" v-if="this.data.ID">Remover</button>
            </div>
            <div class="control">
              <button class="button" @click="cancel()">Cancelar</button>
            </div>
          </div>
        </div>
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
      data: {
        id: this.$route.query.id,
      },
    };
  },
  methods: {
    save() {
      const config = {
        method: "post",
        data: this.data,
      };
      if (this.data.ID) {
        config.url = "/api/vendedor/update";
      } else {
        config.url = "/api/vendedor/insert";
      }
      axios(config)
        .then((result) => {
          this.$router.push({
            name: "Vendedor",
            query: {
              name: this.$route.query.name,
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancel() {
      this.$router.push({
        name: "Vendedor",
        query: {
          name: this.$route.query.name,
        },
      });
    },
    remove() {
      axios({
        method: "post",
        url: "/api/cliente/remove",
        data: this.$route.query,
      })
        .then((result) => {
          this.$router.push({
            name: "Vendedor",
            query: {
              name: this.$route.query.name,
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    if (this.data.id) {
      axios({
        method: "post",
        url: "/api/vendedor/byid",
        data: this.$route.query,
      })
        .then((result) => {
          const parsedData = result.data.data.map((item) => {
            const clone = { ...item };
            clone.ID = this.$route.query.id;
            return clone;
          });
          this.data = parsedData[0];
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>