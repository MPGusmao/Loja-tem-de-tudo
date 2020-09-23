<template>
  <div class="field">
    <label class="label">{{label}}</label>
    <div class="control">
      <input class="input" :value="value" :type="type" @input="onChange" />
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
  methods: {
    //Needed to get the values
    onChange(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
<style lang="scss">
.field {
  padding-left: 0.5rem;
}
.input {
  display: flex;
  width: 100%;
}
</style>