export default {
	createMessage(objRef) {
		// this.objRef.$message.save()
		objRef.$message
			.save({
				content: objRef.message,
				firepitId: objRef.firepit.id,
				utilisateurId: objRef.user.id,
			})
			.then(
				(response) => {
					if (response.status === 201) {
						// Message envoyé.
					}
				},
				(responseError) => {
					console.log("ERREUR SERVEUR", responseError);
				}
			);
	},

	createMessageFromParams(objRef, pMessage, pFirepitId, pUserId) {
		// this.objRef.$message.save()
		objRef.$message
			.save({
				content: pMessage,
				firepitId: pFirepitId,
				utilisateurId: pUserId,
			})
			.then(
				(response) => {
					if (response.status === 201) {
						// Message envoyé.
					}
				},
				(responseError) => {
					console.log("ERREUR SERVEUR", responseError);
				}
			);
	},

	getMessagesByFirepit(objRef, pId) {
		objRef.$messageFromFirepit.query({ id : pId }).then(
			(response) => {
				if (response.status === 200) {
					// Stockage de la liste des messages récupérés de l'ID pId dans $parent.messagesList
					objRef.messagesList = response.data;
				}
			},
			(responseError) => {
				console.log("ERREUR SERVEUR", responseError);
			}
		);
	},
};
