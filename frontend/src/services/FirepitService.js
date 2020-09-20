export default {
    //TODO CREATE FIREPIT

	//Return one Firepit
	getOne(objRef, pId) {
		objRef.$firepit.get({ id: pId }).then(
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

	//Return entire Firepit list
	getAll(objRef) {
		objRef.$firepit.query({}).then(
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

	//Update Firepit [Sujet / portee] in DB
	update(objRef) {
		objRef.$firepit
			.update(
				{
					id: objRef.firepit.id,
				},
				{
                    sujet: objRef.firepit.sujet,
                    portee: objRef.firepit.portee
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

	//Delete firepit in DB
	destroy(objRef) {
		objRef.$firepit.delete({ id: objRef.firepit.id }).then(
			(response) => {
				console.log(response.body.message);
			},
			(responseError) => {
				console.log(responseError);
			}
		);
	},
};