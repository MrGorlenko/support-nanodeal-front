<template>
  <div :class="$style.wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.wrapper {
  width: 20%;
  box-shadow: 0px 2px 1px rgba(233, 216, 207, 0.4);
  border-radius: 10px 0 0 10px;
  padding: 7px;
  background: #fff;
}
</style>
