import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	//====================================STATE=============================
	state: {
		existingAccount: true,
		isAuth: false,
		user: {
			email: "",
			token: "",
			prenom: "",
			nom: "",
			poste: "",
			id: "",
		},
		firepit: { id: "" },
		errorMessage: "",
		warningMessage: "",
	},
	//==================================GETTERS=============================
	getters: {},
	//=================================MUTATIONS============================
	mutations: {
		//User
		SET_USER(state, pUser) {
			state.user = {
				email: pUser.email,
				token: pUser.token,
				prenom: pUser.prenom,
				nom: pUser.nom,
				poste: pUser.poste,
				id: pUser.id,
			}
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
		//----------------
		SET_AUTH(state) {
			state.isAuth = true;
		},
		UNSET_AUTH(state) {
			state.isAuth = false;
		},
		//------------------
		SET_ERROR_MESSAGE(state, message) {
			state.errorMessage = message;
		},
		UNSET_ERROR_MESSAGE(state) {
			state.errorMessage = "";
		},
		SET_WARNING_MESSAGE(state, message) {
			state.warningMessage = message;
		},
		UNSET_WARNING_MESSAGE(state) {
			state.warningMessage = "";
		},
	},
	//==================================ACTIONS=============================
	actions: {
		userInitFromParams(context, pUser) {
			context.commit("SET_EMAIL", pUser.email);
			context.commit("SET_TOKEN", pUser.token);
			context.commit("SET_PRENOM",pUser.prenom);
			context.commit("SET_NOM",pUser.nom);
			context.commit("SET_POSTE", pUser.poste);
			context.commit("SET_ID", pUser.id);
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
		isLoggedIn() {
			return this.isAuth;
		},
		setAuth(context, payload) {
			if (payload) {
				context.commit("SET_AUTH");
			} else {
				context.commit("UNSET_AUTH");
			}
		},
		setErrorMessage(context, message) {
			context.commit("SET_ERROR_MESSAGE", message);
		},
		unsetErrorMessage(context) {
			context.commit("UNSET_ERROR_MESSAGE");
		},
		setWarningMessage(context, message) {
			context.commit("SET_WARNING_MESSAGE", message);
		},
		unsetWarningMessage(context) {
			context.commit("UNSET_WARNING_MESSAGE");
		},
	},
	modules: {},
});

export default store;
