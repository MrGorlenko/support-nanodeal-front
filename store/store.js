export const state = () => ({
  auth_token: '',
})

export const getters = {
  auth_token: (state) => {
    return state.auth_token
  },
}

export const mutations = {
  SET_TOKEN(state, payload) {
    state.auth_token = payload
  },
}

export const actions = {
  auth({ commit }, payload) {
    // commit('CLEAN_ACCESS_TOKEN')
    return new Promise((resolve, reject) =>
      this.$axios
        .$post(
          'http://ec2-13-53-66-70.eu-north-1.compute.amazonaws.com:8000/api/v1/token/',
          {
            username: payload.email,
            password: payload.password,
          }
        )
        .then(
          (response) => resolve(response),
          (error) => reject(error)
        )
    )
    // .then((response) => {
    //   commit('SET_ACCESS_TOKEN', response.access)
    //   this.app.router.push('/profile')
    // })
    // .catch((err) => {
    //   commit('SET_ERROR_STATUS', err.response.status)
    // })
  },
  // auth(payload) {
  //   return new Promise((resolve, reject) =>
  //     this.$axios
  //       .$post(
  //         'http://ec2-13-53-66-70.eu-north-1.compute.amazonaws.com:8000/api/v1/token/',
  //         {
  //           username: payload.email,
  //           password: payload.password,
  //         }
  //       )
  //       .then(
  //         (response) => resolve(response),
  //         (error) => reject(error)
  //       )
  //   )
  // },
  setToken({ commit }, payload) {
    commit('SET_TOKEN', payload)
  },
}
