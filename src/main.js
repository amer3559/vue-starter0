import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//Pinia config
import { createPinia } from "pinia";
// Emitter Config
import mitt from "mitt";
// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const pinia = createPinia();

const Emitter = mitt();

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(router)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(pinia)
  .mount("#app");
