<template>
  <div class="input-field">
    <div class="input-field-content">
      <div class="input-field-content-item">
        <label class="input-field-content-item-label">{{ label }}</label>
        <input
          class="input-field-input"
          :type="type"
          :value="value"
          @change="onChange"
          :readOnly="readOnly"
          :placeholder="placeholder"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputField",
  props: {
    label: { type: String, default: null },
    type: { type: String, default: "text" },
    value: { default: null },
    readOnly: { type: Boolean, default: false },
    placeholder: { type: String, default: null },
  },
  methods: {
    //Needed to get the values
    onChange(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
<style lang="scss">
.input-field {
  display: flex;
  width: 100%;
}
.input-field-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-top: 1rem;
}
.input-field-content-item {
  display: flex;
  align-items: flex-end;
}
.input-field-content-item-label {
  font-size: 1.1rem;
  width: 25%;
}
.input-field-input {
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