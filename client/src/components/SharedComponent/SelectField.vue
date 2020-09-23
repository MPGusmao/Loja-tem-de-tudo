<template>
  <div class="field">
    <div class="control">
      <label class="label">{{label}}</label>
      <div class="select">
        <div>
          <select @change="onChange" :value="value">
            <option v-for="item in selectOptions" :key="item">{{item}}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectField",
  props: {
    label: { type: String, default: null },
    value: { default: null },
    selectOptions: {
      type: Array,
      default: function () {
        return [{ option: "No options" }];
      },
    },
  },
  methods: {
    onChange(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
<style lang="scss">
</style>