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
		if (localStorage.getItem(LOCALSTORAGE_NAME + '_token')) {
			return true;
		} else {
			return false;
		}
	}

	initUser() {

		this.user.token = this.get("token");
	}

	set(pKey, pValue) {
		localStorage.setItem(LOCALSTORAGE_NAME + "_" + pKey, pValue);
	}

	get(pKey) {
		return localStorage.getItem(LOCALSTORAGE_NAME + "_" + pKey);
	}

	unset(pKey) {
		localStorage.removeItem(LOCALSTORAGE_NAME + "_" + pKey);
	}
}

export default new LocalStorageManager();
