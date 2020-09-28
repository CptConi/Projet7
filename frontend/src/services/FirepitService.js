const firepitURL = "http://localhost:8080/firepit";

export default {
	// !!!!!!!!!!!!!!!!!!!!!!! TEST METHODS !!!!!!!!!!!!!!!!!!!!
	createTestFirepit(objRef) {
		objRef.$http
			.post(firepitURL, { sujet: objRef.sujet, portee: objRef.portee, utilisateurId: objRef.user.id })
			.then((response) => {
				if (response.status === 201) {
					console.log("Firepit créé :'" + response.data.sujet + "'");
				}
			})
			.catch((responseError) => {
				console.log("ERREUR SERVEUR", responseError);
			});
	},

	// ------------------------PROD-----------------------------

	createFirepit(objRef) {
		objRef.$http
			.post(
				firepitURL,
				{ sujet: objRef.form.sujet, portee: objRef.portee, utilisateurId: objRef.user.id },
				{ headers: { Authorization: objRef.user.token } }
			)
			.then((response) => {
				if (response.status === 201) {
					console.log("Firepit créé :'" + response.data.sujet + "'");
					objRef.firepitCreated(response.data.id);
				}
			})
			.catch((responseError) => {
				console.log("ERREUR SERVEUR", responseError);
			});
	},

	//Return one Firepit
	getOne(objRef, pId) {
		objRef.$http
			.get(firepitURL + "/" + pId, { headers: { Authorization: objRef.user.token } })
			.then((response) => {
				objRef.currentFirepit = response.body;
				objRef.loading = false;
			})
			.catch((responseError) => {
				console.log("An error occured while trying to communicate with Database", responseError);
			});
	},

	//Return entire Firepit list
	getAll(objRef) {
		objRef.$http
			.get(firepitURL, { headers: { Authorization: objRef.user.token } })
			.then((response) => {
				objRef.reqResponse = response.body;
			})
			.catch((responseError) => {
				console.log("An error occured while trying to communicate with Database", responseError);
			});
	},

	//Update Firepit [Sujet / portee] in DB
	update(objRef) {
		objRef.$http
			.update(
				firepitURL + "/" + objRef.firepit.id,
				{
					sujet: objRef.firepit.sujet,
					portee: objRef.firepit.portee,
				},
				{ headers: { Authorization: objRef.user.token } }
			)
			.then((response) => {
				console.log(response.body.message);
			})
			.catch((responseError) => {
				console.log(responseError);
			});
	},

	//Delete firepit in DB
	destroy(objRef) {
		objRef.$http
			.delete(firepitURL + "/" + objRef.firepit.id, { headers: { Authorization: objRef.user.token } })
			.then((response) => {
				console.log(response.body.message);
			})
			.catch((responseError) => {
				console.log(responseError);
			});
	},
};
