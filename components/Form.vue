<template>
  <form :class="$style[formType]" @submit.prevent="submitForm">
    <slot></slot>
  </form>
</template>

<script>
export default {
  props: {
    formType: {
      type: String,
      default: "",
    },
  },

  methods: {
    submitForm() {
      this.$emit("submit");
    },
  },
};
</script>

<style lang="scss" module>
.auth-form {
  width: 300px;
  height: auto;
  background: #faf5f2;
  border: 6px solid rgba(39, 41, 49, 0.07);
  border-radius: 20px;
  text-align: center;
  background: #faf5f2;
}

.chat-form {
  width: calc(100% - 14px);
  position: absolute;
  left: 7px;
  bottom: 7px;
  display: flex;
  justify-content: space-around;
  height: 30px;
}
</style>
