<template>
  <div :class="$style.wrapper">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>

<style module lang="scss">
.wrapper {
  border-radius: 10px;
  width: 100%;
  height: 30px;
  padding: 5px;
  border: 1px solid black;
}
</style>
