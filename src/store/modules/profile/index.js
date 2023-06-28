import { getUser } from "@/api";
import { COMMIT_UPDATE_USERNAME } from "@/common/mutation-types";

const module = {
  state() {
    return {
      username: "Darker13Navas",
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
    async updateUsername({ commit, state }, username) {
      console.log("updateUsername", state.username, username);
      const user = await getUser(1);
      commit(COMMIT_UPDATE_USERNAME, user.username);
    },
  },
};

export default module;
