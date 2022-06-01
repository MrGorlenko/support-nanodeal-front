<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    if (window.localStorage.getItem("access_token")) this.$router.push("/chat");
    if (!window.localStorage.getItem("access_token"))
      this.$router.push("/auth");
  },
};
</script>
