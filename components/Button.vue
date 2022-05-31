<template>
  <button :class="$style[buttonType]">{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: '',
    },
    buttonType: {
      type: String,
      default: 'button',
    },
  },
  methods: {},
}
</script>

<style lang="scss" module>
.button-auth,
.button-chat {
  outline: none;
}

.button-chat {
  width: 15%;
}
</style>
