export default {
	logIn(objRef) {
		objRef.$login.save({ email: objRef.email, password: objRef.password }).then(
			(response) => {
				if (response.status === 200) {
					// Utilisateur connecté !
					objRef.userUpdateLoginInfos({
						email: response.data.email,
						token: response.data.token,
						id: response.data.id,
					});
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

	createUser(objRef){
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
	}
};
