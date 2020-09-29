<template>
  <div class="input-field">
    <div class="input-field-content">
      <div class="input-field-content-label">{{ label }}</div>
    </div>
    <div class="input-field-content">
      <input class="input-field-input" :type="type" :value="value" />
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
  padding-left: 0.1rem;
}
.input-field-content-label {
  font-size: 1.2rem;
}
.input-field-input {
  display: flex;
  width: 100%;
  font-size: 1rem;
  border-top: none;
  border-right: none;
  border-left: none;
  box-shadow: none;
}
</style>