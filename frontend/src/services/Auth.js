export default {
	logIn(objRef) {
		objRef.$login.save({ email: objRef.email, password: objRef.password }).then(
			(response) => {
				if (response.status === 200) {
					// Utilisateur connecté !

					objRef.id = response.data.id;
					objRef.token = response.data.token;
					objRef.logSuccess = true;
				}
			},
			(responseError) => {
				console.log("ERREUR D'AUTHENTIFICATION : \n", responseError.body.error);
			}
		);
	},

	signup(objRef) {
		objRef.$signup.save({ email: objRef.email, password: objRef.password }).then(
			(response) => {
				if (response.status === 201) {
					console.log(
						"Utilisateur créé avec l'adresse mail " +
							JSON.stringify(response.data.email)
					);
					objRef.logIn();
				}
			},
			(responseError) => {
				console.log("ERREUR SERVEUR", responseError);
			}
		);
	},

	createUser(objRef) {
		objRef.$signup.save({ email: objRef.email, password: objRef.password }).then(
			(response) => {
				if (response.status === 201) {
					console.log(
						"Utilisateur créé avec l'adresse mail " +
							JSON.stringify(response.data.email)
					);
				}
			},
			(responseError) => {
				console.log("ERREUR SERVEUR", responseError);
			}
		);
	},
};
