<template>
  <div class="select-field">
    <div class="select-field-content">
      <div class="select-field-content-item">
        <label class="select-field-content-label">{{ label }}</label>
        <select class="select-field-select" @change="onChange" :value="value">
          <option v-for="item in selectOptions" :key="item">
            {{ item }}
          </option>
        </select>
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
.select-field {
  display: flex;
  // width: 100%;
}
.select-field-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-top: 1rem;
}
.select-field-content-item {
  display: flex;
  align-items: flex-end;
}
.select-field-content-label {
  font-size: 1.1rem;
  width: 25%;
}
.select-field-select {
  border-style: solid;
  background-color: white;
  border-color: black;
  border-radius: 0.2rem;
  border-width: 0.1rem;
  box-shadow: none;
  color: black;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  padding-right: 0.1rem;
}
</style>