<template>
  <div :class="$style.field">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module>
.field {
  border: 1px solid black;
  border-radius: 0 10px 10px 0;
  width: 80%;
  padding: 7px;
  position: relative;
}
</style>
