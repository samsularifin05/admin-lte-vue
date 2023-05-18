import { createApp } from "vue";
import "./assets/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.vue";
import { router } from "./components";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router).mount("#app");
