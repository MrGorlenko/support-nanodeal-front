<template>
  <div :class="$style.wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module>
.wrapper {
  width: 20%;
  border: 1px solid black;
  border-radius: 10px 0 0 10px;
  padding: 7px;
}
</style>
