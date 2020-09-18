import Vue from "vue";
import VueRouter from "vue-router";
import Authentification from "../views/Authentification.vue";
import Home from "../views/Home.vue"

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Authentification",
		component: Authentification,
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
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

export default router;
