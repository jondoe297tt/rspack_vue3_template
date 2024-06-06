import { createApp } from "vue";
import App from "@/App.vue";
import { router } from "@/routes/index";
import pinia from "./stores";
import '@unocss/reset/normalize.css';
import "@/styles/base.css";
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
