import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      username: "Darker13Navas",
    };
  },
  // TODO: no pertenecen al componente si no al estado
  getters: {
    // firstName(state) {
    //   return state.username.split("").reverse().join("");
    // },
    firstName: (state) => (c) => {
      // return state.username.split("").reverse().join(c);
      return state.username;
    },
    username(state) {
      return state.username;
    },
  },
  mutations: {
    updateUsername(state, username) {
      state.username = username;
    },
  },
  actions: {
    // TODO: esto se hace de forma asincrona
    updateUsername({ commit, state }, username) {
      console.log("updateUsername", state.username, username);
      //TODO: hace referencia a la mutacion
      commit("updateUsername", username);
    },
  },
});

export default store;
