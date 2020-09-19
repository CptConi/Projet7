export default {
	//Return one user
	getOne(objRef, pId) {
		objRef.$user.get({ id: pId }).then(
			(response) => {
				objRef.reqResponse = response.body;
			},
			(responseError) => {
				console.log(
					"An error occured while trying to communicate with Database",
					responseError
				);
			}
		);
	},

	//Return entire users list
	getAll(objRef) {
		objRef.$user.query({}).then(
			(response) => {
				objRef.reqResponse = response.body;
			},
			(responseError) => {
				console.log(
					"An error occured while trying to communicate with Database",
					responseError
				);
			}
		);
	},

	//Update user [firstname / lastname / job] in DB
	update(objRef) {
		objRef.$user
			.update(
				{
					id: objRef.user.id,
				},
				{
					email: objRef.user.email,
					prenom: objRef.prenom,
					nom: objRef.nom,
					poste: objRef.poste,
				}
			)
			.then(
				(response) => {
					console.log(response.body.message);
				},
				(responseError) => {
					console.log(responseError);
				}
			);
	},

	//Delete user in DB
	destroy(objRef) {
		objRef.$user.delete({ id: objRef.user.id }).then(
			(response) => {
				console.log(response.body.message);
			},
			(responseError) => {
				console.log(responseError);
			}
		);
	},
};
