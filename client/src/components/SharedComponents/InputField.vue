<template>
  <div class="input-field">
    <div class="input-field-content">
      <div class="input-field-content-item">
        <label class="input-field-content-item-label">{{ label }}</label>
      </div>
      <div class="input-field-content-item">
        <input
          class="input-field-input"
          :type="type"
          :value="value"
          @change="onChange"
          :readOnly="readOnly"
          :placeholder="placeholder"
        />
      </div>
      <div class="input-field-content-item" v-if="validate">
        <span
          class="input-field-content-item-req-message"
          v-if="!$v.required && $v.$error"
          >Preencha esse campo</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputField",
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    label: { type: String, default: null },
    type: { type: String, default: "text" },
    value: { default: null },
    readOnly: { type: Boolean, default: false },
    placeholder: { type: String, default: null },
    $v: { type: Object, default: () => null },
    required: { type: Boolean, default: false },
    validate: { type: Boolean, default: false },
  },
  methods: {
    //Needed to get the values
    onChange(event) {
      if (this.$v) {
        this.$v.$touch();
      }
      this.$emit("input", event.target.value);
      this.$emit("onChange", event.target.value);
    },
  },
};
</script>
<style lang="scss">
.input-field {
  display: flex;
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
.input-field-content-item-req-message {
  font-size: 0.7rem;
  color: red;
}
</style>