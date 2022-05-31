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
      default: '',
    },
  },

  methods: {
    submitForm() {
      this.$emit('submit')
    },
  },
}
</script>

<style lang="scss" module>
.auth-form {
  width: 300px;
  height: auto;
  border: 1px solid black;
  text-align: center;
}

.chat-form {
  width: calc(100% - 14px);
  position: absolute;
  left: 7px;
  bottom: 7px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  height: 30px;
}
</style>
