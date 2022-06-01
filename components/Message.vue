<template>
  <div :class="[$style.message, myMessage ? $style.me : $style.opponent]">
    <p :class="$style['message-text']">
      {{ messageText }}
    </p>
    <span :class="$style.time">{{ setTimeFormat(messageTime) }}</span>
  </div>
</template>

<script>
export default {
  props: {
    myMessage: {
      type: Boolean,
      default: null,
    },
    messageText: {
      type: String,
      default: "",
    },
    messageTime: {
      type: String,
      default: "",
    },
  },
  methods: {
    setTimeFormat(time) {
      return time.substring(11, 16);
    },
  },
};
</script>

<style lang="scss" module>
.message {
  position: relative;
  min-width: 100px;
  padding: 5px;
  padding-bottom: 25px;
  margin-bottom: 15px;
}

.message-text {
  margin-top: 0;
  margin-bottom: 0;
}

.time {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 10px;
}

.me {
  border-radius: 5px 0 5px 5px;
  align-self: flex-end;
}

.opponent {
  border-radius: 0px 5px 5px 5px;
  align-self: flex-start;
  background: #fff;
}
</style>
