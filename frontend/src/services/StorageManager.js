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
		if (localStorage.getItem(LOCALSTORAGE_NAME)) {
			return true;
		} else {
			return false;
		}
	}

	initUser() {
		this.user.email = this.get('email');
		this.user.nom = this.get('nom');
		this.user.prenom = this.get('prenom');
		this.user.id = this.get('id');
		this.user.token = this.get('token');
		this.user.poste = this.get('poste');
	}

	initVuexUser(refObj){
		this.initUser();
		refObj.userInitFromLS(this.user);
	}

	set(pKey, pValue) {
		let tempStorageObj = this.getAll();
		for (let prop in tempStorageObj) {
			if (prop === pKey) {
				tempStorageObj[prop] = pValue;
			}
		}
		localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(tempStorageObj));
	}

	get(pKey) {
		let res = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));
		for (let prop in res) {
			if (prop === pKey) {
				return res[prop];
			}
		}
	}

	getAll() {
		return JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));
	}

	fillWithSomePirate() {
		//Méthode de test pour fill le LocalStorage automatiquement.
		this.user.email = "mail.tout@bidon.com";
		this.user.nom = "Sparrow";
		this.user.prenom = "Jack";
		this.user.id = "42";
		this.user.token = "TokenGénéréAléatoirement12345678";
		this.user.poste = "Pirate";

		localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(this.user));
		console.log("Génération d'une entrée de test dans le LocalStorage");
	}
}

export default new LocalStorageManager();
