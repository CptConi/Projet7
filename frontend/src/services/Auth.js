export default {

    
	logIn() {
		this.$login.save({ email: this.email, password: this.password }).then(
			(response) => {
				if (response.status === 200) {
					// Utilisateur connecté !
					this.userUpdateLoginInfos({
						email: response.data.email,
						token: response.data.token,
					});
					this.$router.push({ name: "Home" });
				}
			},
			(responseError) => {
				console.log("ERREUR D'AUTHENTIFICATION : \n", responseError.body.error);
			}
		);
    },
    
	signup() {
		this.$signup.save({ email: this.email, password: this.password }).then(
			(response) => {
				if (response.status === 201) {
					console.log(
						"Utilisateur créé avec l'adresse mail " +
							JSON.stringify(response.data.email)
					);
					this.logIn();
				}
			},
			(responseError) => {
				console.log("ERREUR SERVEUR", responseError);
			}
		);
	},
};