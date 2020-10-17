<template>
  <div class="select-field">
    <div class="select-field-content">
      <div class="select-field-content-item">
        <label class="select-field-content-label">{{ label }}</label>
      </div>
      <div class="select-field-content-item">
        <select class="select-field-select" @change="onChange" :value="value">
          <option v-for="item in selectOptions" :key="item">
            {{ item }}
          </option>
        </select>
        <router-link v-show="hasButton" class="a" :to="href">
          <div class="form-button">
            <div class="form-button-content">
              <button class="form-button-content-button">
                {{ labelButton }}
              </button>
            </div>
          </div>
        </router-link>
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
    labelButton: { type: String, default: null },
    hasButton: { type: Boolean, default: false },
    href: { type: String, default: "#" },
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
  width: 100%;
}
.select-field-content {
  display: flex;
  flex-flow: column;
  width: 100%;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-top: 1rem;
}
.select-field-content-item {
  display: flex;
}
.select-field-content-label {
  font-size: 1.2rem;
}
.select-field-select {
  display: flex;
  border-style: solid;
  background-color: white;
  border-color: black;
  border-radius: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 0.1rem;
  box-shadow: none;
  color: black;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  padding-right: 0.1rem;
}
.form-button {
  display: flex;
  width: 100%;
}
.form-button-content {
  display: flex;
  margin-left: 0.5rem;
}
.form-button-content-button {
  background-color: #0076ff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.4rem;
  border-color: none;
  border-style: none;
  border-width: none;
}
.form-button-content-button:hover {
  background-color: white;
  color: #0076ff;
}
.a {
  text-decoration: none;
}
</style>