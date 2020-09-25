const LOCALSTORAGE_NAME = "Groupomania_firepit";

class LocalStorageManager {
	user = {
		email: "",
		nom: "",
		prenom: "",
		id: "",
		token: "",
		poste: "",
	};

	asAccount() {
		if (localStorage.getItem(LOCALSTORAGE_NAME + '_email')) {
			return true;
		} else {
			return false;
		}
	}

	initUser() {
		this.user.email = this.get("email");
		this.user.nom = this.get("nom");
		this.user.prenom = this.get("prenom");
		this.user.id = this.get("id");
		this.user.token = this.get("token");
		this.user.poste = this.get("poste");
	}

	initVuexUser(refObj) {
		this.initUser();
		refObj.userInitFromParams(this.user);
	}

	set(pKey, pValue) {
		// console.log("[LocalStorage Manager]", "\nSetting Key: " + pKey, "\nWith value: " + pValue);

		localStorage.setItem(LOCALSTORAGE_NAME + "_" + pKey, pValue);
	}

	get(pKey) {
		return localStorage.getItem(LOCALSTORAGE_NAME + "_" + pKey);
	}

	// getAll() {
	// 	return JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));
	// }
}

export default new LocalStorageManager();
