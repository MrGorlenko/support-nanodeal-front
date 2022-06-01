<template>
  <button :class="$style[buttonType]">{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "",
    },
    buttonType: {
      type: String,
      default: "button",
    },
  },
  methods: {},
};
</script>

<style lang="scss" module>
.button-auth,
.button-chat {
  outline: none;
}

.button-auth {
  background: #fe8862;
  border-radius: 13px;
  border: none;
  padding: 10px 75px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
}

.button-chat {
  width: 15%;
  background: #fe8862;
  border-radius: 13px;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
}
</style>
