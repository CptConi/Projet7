export default {
	//Update user [firstname / lastname / job] in DB
	update(objRef) {
		objRef.$user
			.update({
				email: objRef.user.email,
				prenom: objRef.prenom,
				nom: objRef.nom,
				poste: objRef.poste,
			})
			.then(
				(response) => {
					console.log(response);
				},
				(responseError) => {
					console.log(responseError);
				}
			);
	},

	//Delete user in DB
	// delete(objRef) {},
};
