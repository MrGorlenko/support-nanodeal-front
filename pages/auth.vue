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
      email: '',
      password: '',
    }
  },
  methods: {
    submit(email, password) {
      this.$store
        .dispatch('store/auth', { email, password })
        .then((response) => {
          this.$store.dispatch('store/setToken', response.access)
          this.router.push('/chat')
        })
    },
  },
}
</script>

<style module lang="scss">
.auth {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
