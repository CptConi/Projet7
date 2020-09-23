import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	//====================================STATE=============================
	state: {
		existingAccount: true,
		user: {
			email: "",
			token: "",
			prenom: "",
			nom: "",
			poste: "",
			id: "",
		},
		firepit: { id: "" },
	},
	//==================================GETTERS=============================
	getters: {},
	//=================================MUTATIONS============================
	mutations: {
		//User
		SET_USER(state, pUser) {
			state.user = pUser;
		},
		SET_EMAIL(state, pEmail) {
			state.user.email = pEmail;
		},
		SET_TOKEN(state, pToken) {
			state.user.token = pToken;
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
		SET_ID(state, pId) {
			state.user.id = pId;
		},
		//-------
		SET_EXISTING_ACCOUNT(state) {
			state.existingAccount = true;
		},
		UNSET_EXISTING_ACCOUNT(state) {
			state.existingAccount = false;
		},
		//-------
		SET_FIREPIT_ID(state, pId) {
			state.firepit.id = pId;
		},
	},
	//==================================ACTIONS=============================
	actions: {
		userInitFromLS(context, pUser) {
			context.commit("SET_USER", pUser);
		},
		userUpdateLoginInfos(context, pInfos) {
			//Update mail and Token infos into store
			context.commit("SET_EMAIL", pInfos.email);
			context.commit("SET_TOKEN", pInfos.token);
			context.commit("SET_ID", pInfos.id);
		},
		userUpdateCommonInfos(context, pInfos) {
			context.commit("SET_PRENOM", pInfos.prenom);
			context.commit("SET_NOM", pInfos.nom);
			context.commit("SET_POSTE", pInfos.poste);
		},

		accountExists(context) {
			context.commit("SET_EXISTING_ACCOUNT");
		},
		accountDoNotExists(context) {
			context.commit("UNSET_EXISTING_ACCOUNT");
		},
		setFirepitId(context, pId) {
			context.commit("SET_FIREPIT_ID", pId);
		},
	},
	modules: {},
});
