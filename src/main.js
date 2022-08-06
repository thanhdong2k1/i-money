import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/style/global.css";
import "./assets/style/tailwind.css";

import { onAuthStateChanged, projectAuth } from "@/configs";
import { registerGlobalComponents } from "./utils/import";

// const app = createApp(App);
// registerGlobalComponents(app);
// app.use(router);
// app.mount("#app");
let app;
onAuthStateChanged(projectAuth, () => {
  if (!app) {
    app = createApp(App);
    registerGlobalComponents(app);
    app.use(router);
    app.mount("#app");
  }
});
