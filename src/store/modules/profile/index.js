import { getUser } from "@/api";
import { COMMIT_UPDATE_USERNAME } from "@/common/mutation-types";

const module = {
  // TODO: se implementa el espacio de nombre para evitar el conflicto de nombres
  namespaced: true,
  state() {
    return {
      username: "",
    };
  },
  getters: {
    firstName: (state) => (c) => {
      return state.username;
    },
  },
  mutations: {
    [COMMIT_UPDATE_USERNAME](state, username) {
      state.username = username;
    },
  },
  actions: {
    async updateUsername({ commit, state, rootState }, username) {
      console.log("updateUsername", state.username, username);
      const user = await getUser(1);
      commit(COMMIT_UPDATE_USERNAME, user.username);
      if (state.username) {
        // TODO: se accede a la mutacion del modulo root
        commit("setStatus", "active", { root: true });
        console.log(rootState.status);
        // commit("session/setStatus", "active", { root: true });
      }
    },
  },
};

export default module;
