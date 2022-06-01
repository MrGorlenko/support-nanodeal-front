<template>
  <input
    v-model="model"
    :class="$style[inputType]"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "",
    },
    value: {
      default: "",
      type: [Number, String],
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss" module>
.input-auth {
  border: 1px dashed #eaecf1;
  border-radius: 13px;
  padding: 8px 16px;
}

.input-chat {
  width: 80%;
  border-radius: 13px;
  padding: 8px 16px;
}
</style>
