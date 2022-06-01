<template>
  <div :class="[$style.user, toggled]" @click="click">
    <p :class="$style.name">{{ name }}</p>
    <p :class="$style.time">{{ setTimeFormat(time) }}</p>
    <p :class="$style.message">{{ lastMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: false,
    },
    lastMessage: {
      type: String,
      default: "",
    },
  },
  computed: {
    toggled() {
      if (this.active) return this.$style.active;
      return this.$style["non-active"];
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
    setTimeFormat(time) {
      return time.substring(11, 16);
    },
  },
};
</script>

<style lang="scss" module>
.user {
  width: 100%;
  height: 60px;
  position: relative;
  padding: 10px;
  border-radius: 10px 0px 10px 0px;
}

.time {
  position: absolute;
  right: 5px;
  bottom: 5px;
  font-size: 10px;
  margin-top: 0;
  margin-bottom: 0;
}

.message {
  color: #161313;
  margin-top: 10px;
  margin-bottom: 0;
}

.name {
  margin-top: 0;
  margin-bottom: 0;
}

.active {
  background: #ffe7e0;
}
</style>
