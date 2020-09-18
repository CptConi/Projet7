import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	//====================================STATE=============================
	state: {
		user: {
			email: "",
			password: "",
			token: "",
			prenom: "",
			nom: "",
			poste: "",
		},
	},
	//==================================GETTERS=============================
	getters: {},
	//=================================MUTATIONS============================
	mutations: {
		SET_EMAIL(state, pEmail) {
			state.user.email = pEmail;
		},
		SET_PASSWORD(state, pPassword) {
			state.user.password = pPassword;
		},
		SET_PRENOM(state, pPrenom) {
			state.user.prenom = pPrenom;
		},
		SET_NOM(state, pNom) {
			state.user.nom = pNom;
		},
		SET_POSTE(state, pPoste) {
			state.user.poste = pPoste;
		},
	},
	//==================================ACTIONS=============================
	actions: {},
	modules: {},
});
