const URL = "http://localhost:8080";

export default {
	logIn(objRef) {
		const loginURL = URL + "/user/login";
		objRef.$http
			.post(loginURL, { email: objRef.email, password: objRef.password })
			.then((response) => {
				if (response.status === 200) {
					// Utilisateur connecté !

					objRef.id = response.data.id;
					objRef.token = response.data.token;
					objRef.prenom = response.data.prenom;
					objRef.nom = response.data.nom;
					objRef.poste = response.data.poste;

					objRef.logSuccess = true;
				}
			})
			.catch((responseError) => {
				console.log("ERREUR D'AUTHENTIFICATION : \n", responseError.body.error);
			});
	},

	signup(objRef) {
		const signupURL = URL + "/user/signup";
		objRef.$http
			.post(signupURL, { email: objRef.email, password: objRef.password })
			.then((response) => {
				if (response.status === 201) {
					console.log("Utilisateur créé avec l'adresse mail " + JSON.stringify(response.data.email));
					objRef.logIn();
				}
			})
			.catch((responseError) => {
				console.log("ERREUR SERVEUR", responseError);
			});
	},
};
