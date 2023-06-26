import "./assets/main.css";

import { Icon } from "@iconify/vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.component("icon", Icon);

app.use(router);

app.mount("#app");
