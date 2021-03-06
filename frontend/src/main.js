import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import VueResource from "vue-resource";
import axios from "axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

//*********************** Install BootstrapVue ******************/
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "./custom.scss";
/****************************************************************/

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
	

Vue.use(VueResource);

new Vue({
	router,
	store,

	render: (h) => h(App),
}).$mount("#app");
