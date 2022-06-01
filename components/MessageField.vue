<template>
  <div :class="$style.field">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.field {
  box-shadow: 0px 2px 1px rgba(233, 216, 207, 0.4);
  border-radius: 0 10px 10px 0;
  width: 80%;
  padding: 7px;
  position: relative;
  background: #faf5f2;
}
</style>
