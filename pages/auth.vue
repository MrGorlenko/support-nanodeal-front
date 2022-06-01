<template>
  <div :class="$style.auth">
    <Form :form-type="'auth-form'" @submit="submit(email, password)">
      <p>
        <Input
          v-model="email"
          :input-type="'input-auth'"
          :placeholder="'email'"
          :type="'text'"
        />
      </p>
      <p>
        <Input
          v-model="password"
          :input-type="'input-auth'"
          :placeholder="'password'"
          :type="'password'"
        />
      </p>
      <p><Button :button-type="'button-auth'" :button-text="'login'" /></p>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      token: "",
    };
  },
  methods: {
    submit(email, password) {
      this.$axios
        .post("http://13.53.66.70:8000/api/v1/token/", {
          username: email,
          password: password,
        })
        .then((response) => {
          this.token = response.data.access;
          window.localStorage.setItem("access_token", this.token);
        })
        .then(() => {
          this.$router.push("/chat");
        });
    },
  },
};
</script>

<style module lang="scss">
.auth {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    47.39% 118.47% at 3.68% -21.35%,
    rgba(255, 219, 19, 0.1) 0%,
    rgba(255, 125, 75, 0.1) 30.4%,
    rgba(231, 130, 247, 0.1) 62.15%,
    rgba(216, 65, 137, 0.1) 100%
  );
}
</style>
