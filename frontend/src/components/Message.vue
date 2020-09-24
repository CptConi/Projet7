<template>
	<div>
		<b-container :class="style" class="mb-3">
			<b-row>
				<small class="auteur font-italic">
					{{ auteur }}
				</small>
			</b-row>
			<b-row>
				<div class="message col-6" v-html="formatedContent"></div>
				
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "Message",
	props: { content: String, prenom: String, nom: String, utilisateurId: Number },
	computed: {
		...mapState(["user"]),
		formatedContent() {
			//Formatage du contenu du message

			//On vérifie si une url est présente dans le content:
			let formatedMessage = this.urlify(this.content);
			return formatedMessage;
		},
		auteur() {
			return this.prenom + " " + this.nom;
		},
		style() {
			if (this.utilisateurId == this.user.id) {
				//C'est vous qui avez envoyé le message
				return "message__sent";
			} else {
				return "message__received";
			}
		},
	},
	methods: {
		urlify(pText) {
			var urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
			return pText.replace(urlRegex, (url) => {
				this.url = url;
				if (!this.isThisAnImage(url)) {
					return '<a href="' + url + '" target="_blank" @mouseover="metaDatas">' + url + "</a>";
				} else {
					return (
						`<a href="' ` +
						url +
						`" target="_blank" >` +
						`<img src="` +
						url +
						`" class="img-fluid" >
					</a>
					`
					);
				}
			});
		},
		isThisAnImage(url) {
			return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
		},
	},
};
</script>

<style lang="scss">
.message {
	&__sent {
		& .auteur {
			margin-right: auto;
		}
		& .message {
			background-color: rgb(37, 153, 207);
			color: black;
			border-radius: 10px 10px 10px 0px;
			padding-top: 0.3rem;
			padding-bottom: 0.3rem;
			overflow-wrap: break-word;
			& a{
				color: indigo;
			}
		}
	}
	&__received {
		& .auteur {
			margin-left: auto;
		}
		& .message {
			margin-left: auto;
			background-color: #e4e4e4;
			color: black;
			border-radius: 10px 0px 10px 10px;
			padding-top: 0.3rem;
			padding-bottom: 0.3rem;
			overflow-wrap: break-word;
		}
	}
	& img {
		z-index: 1000;
		object-fit: fill;
		position: relative;
		bottom: 0;
		// left: 25%;
		transform: translateX(-75%);
	}
}
</style>
