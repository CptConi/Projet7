import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import "./custom.scss";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = "http://localhost:8080";

new Vue({
	router,
	store,

	render: (h) => h(App),
}).$mount("#app");
