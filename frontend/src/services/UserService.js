const userURL = "http://localhost:8080/user";

export default {
	// !!!!!!!!!!!!!!!!!!!!!!! TEST METHODS !!!!!!!!!!!!!!!!!!!!
	//Create user for Testing methods
	createTestUser(objRef) {
		const URL = userURL + "/create";
		objRef.$http
			.save(URL, {
				email: objRef.email,
				password: objRef.password,
				prenom: objRef.prenom,
				nom: objRef.nom,
				poste: objRef.poste,
			})
			.then((response) => {
				if (response.status === 201) {
					console.log(response.body.message);
				}
			})
			.catch((responseError) => {
				console.log("ERREUR SERVEUR", responseError);
			});
	},

	// ------------------------PROD-----------------------------
	//Return one user
	getOne(objRef, pId) {
		objRef.$http
			.get(userURL + "/" + pId)
			.then((response) => {
				objRef.reqResponse = response.body;
			})
			.catch((responseError) => {
				console.log("An error occured while trying to communicate with Database", responseError);
			});
	},

	//Return entire users list
	getAll(objRef) {
		objRef.$http
			.get(userURL)
			.then((response) => {
				objRef.reqResponse = response.body;
			})
			.catch((responseError) => {
				console.log("An error occured while trying to communicate with Database", responseError);
			});
	},

	//Update user [firstname / lastname / job] in DB
	update(objRef) {
		objRef.$http
			.update(
				userURL,
				+"/" + objRef.user.id,

				{
					email: objRef.user.email,
					prenom: objRef.prenom,
					nom: objRef.nom,
					poste: objRef.poste,
				}
			)
			.then((response) => {
				console.log(response.body.message);
			})
			.catch((responseError) => {
				console.log(responseError);
			});
	},

	//Delete > Update to empty
	updateDelete(objRef) {
		objRef.$http
			.update(userURL + "/" + objRef.user.id, { email: "", password: "", nom: objRef.user.nom + " (Utilisateur supprimé)" })
			.then((response) => {
				console.log(response.body.message);
			})
			.catch((responseError) => {
				console.log(responseError);
			});
	},

	//Delete user in DB
	destroy(objRef) {
		objRef.$http
			.delete(userURL + "/" + objRef.user.id)
			.then((response) => {
				console.log(response.body.message);
			})
			.catch((responseError) => {
				console.log(responseError);
			});
	},
};
