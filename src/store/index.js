import channels from "@/store/modules/channels";
import messages from "@/store/modules/messages";
import profile from "@/store/modules/profile";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // username: "Darker13Navas",
      status: null,
    };
  },
  // TODO: no pertenecen al componente si no al estado
  getters: {
    // firstName(state) {
    //   return state.username.split("").reverse().join("");
    // },
    // firstName: (state) => (c) => {
    // return state.username.split("").reverse().join(c);
    // return state.username;
    // },
    // username(state) {
    //   return state.username;
    // },
    //TODO: se accede a cualquier otro modulo desde el rootState
    // firstName: (state, getters, rootState) => (c) => {
    //   return rootState.profile.username;
    // },
  },
  mutations: {
    // updateUsername(state, username) {
    //   state.username = username;
    // },
    // [COMMIT_UPDATE_USERNAME](state, username) {
    //   state.username = username;
    // },
    setStatus(state, status) {
      state.status = status;
    },
  },
  actions: {
    // TODO: esto se hace de forma asincrona
    // updateUsername({ commit, state }, username) {
    //   console.log("updateUsername", state.username, username);
    //TODO: hace referencia a la mutacion
    //   commit("updateUsername", username);
    // },
    // async updateUsername({ commit, state }, username) {
    //   console.log("updateUsername", state.username, username);
    //   const user = await getUser(1);
    //   console.log("user", user);
    //   commit(COMMIT_UPDATE_USERNAME, user.username);
    // },
  },
  modules: {
    profile,
    channels,
    messages,
    // {
    // TODO: uso basico de los modulos
    // state() {
    //   return {
    //     username: "Darker13Navas",
    //   };
    // },
    // getters: {
    //   username(state) {
    //     return state.username;
    //   },
    // },
    // mutations: {
    //   updateUsername(state, username) {
    //     state.username = username;
    //   },
    // },
    // actions: {
    //   updateUsername({ commit, state }, username) {
    //     console.log("updateUsername", state.username, username);
    //     commit("updateUsername", username);
    //   },
    // },
    // },
  },
});

export default store;
