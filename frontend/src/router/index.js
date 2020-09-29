import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/store";

import Authentification from "../views/Authentification.vue";
import Home from "../views/Home.vue";
import FirepitView from "../views/FirepitView";


Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Authentification",
		component: Authentification,
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/firepit/:id",
		name: "Firepitview",
		component: FirepitView,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "*",
		name: "WrongURL",
		redirect: "/",
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach = (to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth) && !store.state.isAuth) {
		console.log("Cette route nécessite une authentification");
		next({name: 'Authentification'})
	} else {
		next();
	}
};

export default router;
