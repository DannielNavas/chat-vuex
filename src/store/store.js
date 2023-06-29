// import { reactive } from "vue";

// const store = reactive({
//   username: "DannielNavas",
//   updateUsername(username) {
//     this.username = username;
//   },
// });

// export default store;

const store = {
  profile: {
    username: "",
  },
  contacts: [
    {
      id: 1,
      username: "User 1",
    },
    {
      id: 2,
      username: "User 2",
    },
  ],
  messages: [
    {
      id: 1,
      author: 1,
      msg: "Hola ❤️",
    },
    {
      id: 2,
      author: 1,
      msg: "Hola ❤️",
    },
    {
      id: 1,
      author: 2,
      msg: "Hola ❤️",
    },
  ],
  channels: [
    {
      id: 1,
      name: "",
      message: [1, 2],
    },
    {
      id: 2,
      name: "",
      message: [3],
    },
  ],
};
