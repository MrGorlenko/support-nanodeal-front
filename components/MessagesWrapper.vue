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
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column-reverse;
}
</style>
