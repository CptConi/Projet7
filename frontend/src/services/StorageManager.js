class LocalStorageManager {
	LOCALSTORAGE_NAME = localStorage.Groupomania_firepit;
	user = {
		email,
		nom,
		prenom,
		id,
		token,
		poste,
	};

	asAccount() {
		if (LOCALSTORAGE_NAME) {
			return true;
		} else {
			return false;
		}
	}

	initUser() {
		this.user.email = LOCALSTORAGE_NAME.email;
		this.user.nom = LOCALSTORAGE_NAME.nom;
		this.user.prenom = LOCALSTORAGE_NAME.prenom;
		this.user.id = LOCALSTORAGE_NAME.id;
		this.user.token = LOCALSTORAGE_NAME.token;
		this.user.poste = LOCALSTORAGE_NAME.poste;
	}
}

export default new LocalStorageManager;
