<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(item,index) in columns" :key="index">
          <span>{{item}}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(itemRow,index) in data" :key="index">
        <td v-for="(itemCol, indexCol) in itemRow " :key="indexCol">
          <span v-if="indexCol==='ID'">
            <router-link
              :to="{ name: route , query: { name: 'lojavirtual', id: itemRow.ID } }"
            >{{itemCol}}</router-link>
          </span>
          <span v-if="indexCol!=='ID'">{{itemCol}}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "DataTable",
  props: {
    columns: { type: Array, default: null },
    data: { type: Array, default: null },
    route: { type: String, default: null },
  },
};
</script>
