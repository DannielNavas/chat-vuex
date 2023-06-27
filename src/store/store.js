import { reactive } from "vue";

const store = reactive({
  username: "DannielNavas",
  updateUsername(username) {
    this.username = username;
  },
});

export default store;
