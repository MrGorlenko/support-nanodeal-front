<template>
  <div :class="[$style.user, toggled]" @click="click">
    <p :class="$style.name">{{ name }}</p>
    <p :class="$style.time">{{ time }}</p>
    <p :class="$style.message">{{ lastMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
    lastMessage: {
      type: String,
      default: '',
    },
  },
  computed: {
    toggled() {
      if (this.active) return this.$style.active
      return this.$style['non-active']
    },
  },
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" module>
.user {
  border: 1px solid black;
  width: 100%;
  height: 60px;
  position: relative;
  padding: 10px;
}

.time {
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 10px;
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
  background: rgb(132, 122, 122);
}
</style>
