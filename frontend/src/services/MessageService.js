const messageURL = "http://localhost:8080/message";

export default {
	createMessage(objRef) {
		objRef.$http
			.post(messageURL, {
				content: objRef.message,
				firepitId: objRef.firepit.id,
				utilisateurId: objRef.user.id,
			})
			.then((response) => {
				if (response.status === 201) {
					// Message envoyé.
				}
			})
			.catch((responseError) => {
				console.log("ERREUR SERVEUR", responseError);
			});
	},

	createMessageFromParams(objRef, pMessage, pFirepitId, pUserId) {
		objRef.$http
			.post(messageURL, {
				content: pMessage,
				firepitId: pFirepitId,
				utilisateurId: pUserId,
			})
			.then((response) => {
				if (response.status === 201) {
					// Message envoyé.
				}
			})
			.catch((responseError) => {
				console.log("ERREUR SERVEUR", responseError);
			});
	},

	getMessagesByFirepit(objRef, pId) {
		const URL = messageURL + "/fromfirepit";
		objRef.$http
			.get(URL, { params: { id: pId } })
			.then((response) => {
				if (response.status === 200) {
					// Stockage de la liste des messages récupérés de l'ID pId dans $parent.messagesList
					objRef.messagesList = response.data;
				}
			})
			.catch((responseError) => {
				console.log("ERREUR SERVEUR", responseError);
			});
	},
};
