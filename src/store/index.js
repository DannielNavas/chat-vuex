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
      return state.username.split("").reverse().join(c);
    },
    username(state) {
      return state.username;
    },
  },
});

export default store;
