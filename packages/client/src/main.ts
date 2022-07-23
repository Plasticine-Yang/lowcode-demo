import { createApp } from "vue";
import App from "./App.vue";

import setupPinia from "@/store";

import "@/styles/index.scss";

const app = createApp(App);

setupPinia(app);

app.mount("#app");
