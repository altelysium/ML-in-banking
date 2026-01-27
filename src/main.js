import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/routes";
import { store } from "./store/store";
createApp(App).use(router).use(store).mount("#app");
