export const state = () => ({
  auth_token: "",
});

export const getters = {
  auth_token: (state) => {
    return state.auth_token;
  },
};

export const mutations = {
  SET_TOKEN(state, payload) {
    state.auth_token = payload;
    // this.localStorage.setItem("auth_token", state.auth_token);
  },
};

export const actions = {
  auth({ dispatch }, payload) {
    this.$axios
      .post(
        "http://ec2-13-53-66-70.eu-north-1.compute.amazonaws.com:8000/api/v1/token/",
        {
          username: payload.username,
          password: payload.password,
        }
      )
      .then((response) => {
        dispatch("setToken", response.data.access);
      });
  },
  setToken({ commit }, payload) {
    commit("SET_TOKEN", payload);
  },
};
