import { createApp } from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

createApp(App).mount("#app");
