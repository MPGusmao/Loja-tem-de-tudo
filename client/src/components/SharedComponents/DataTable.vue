<template>
  <div class="data-table">
    <div v-show="hasTitle" class="data-table-title">
      <span>{{ title }}</span>
    </div>
    <table class="data-table-table table">
      <thead class="data-table-thead">
        <tr>
          <th v-for="(item, index) in columns" :key="index">
            <span>{{ item }}</span>
          </th>
        </tr>
      </thead>
      <tbody class="data-table-body">
        <tr v-for="(itemRow, index) in data" :key="index">
          <td v-for="(itemCol, indexCol) in itemRow" :key="indexCol">
            <span v-if="indexCol === 'ID'">
              <router-link :to="{ name: route, query: { id: itemRow.ID } }">{{
                itemCol
              }}</router-link>
            </span>
            <span v-if="indexCol !== 'ID'">{{ itemCol }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "DataTable",
  props: {
    columns: { type: Array, default: null },
    data: { type: Array, default: null },
    route: { type: String, default: null },
    title: { type: String, default: null },
    hasTitle: { type: Boolean, default: false },
  },
};
</script>
<style>
.data-table {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border-collapse: collapse !important;
}
.data-table-title {
  display: flex;
  align-self: center;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}
.data-table-title span {
  font-size: 1.3rem;
  font-weight: bold;
  color: #0076ff;
}
table {
  border-collapse: collapse !important;
}
.data-table-thead {
  font-size: 1.1rem;
}
.data-table-thead th {
  border-bottom: solid 0.2rem black;
  text-align: left;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
}
.data-table-body {
  border-bottom: solid 0.1rem black;
}
.data-table-body td {
  padding: 0.5rem;
  border-bottom: solid 0.1rem black;
}
</style>