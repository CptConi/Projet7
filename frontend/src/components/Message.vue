<template>
	<div>
		<b-container :class="style" class="mb-3">
			<b-row>
				<small class="auteur font-italic"> {{ formatedDate }} - {{ formatedAuteur }} </small>
			</b-row>
			<b-row :id="formatedId">
				<p class="message col-6" v-html="formatedContent"></p>
			</b-row>
			<b-row>
				<small></small>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { mapState } from "vuex";
import DateManager from "../services/DateManager";

export default {
	name: "Message",
	props: { content: String, auteur: Object, date: String, utilisateurId: Number, id: Number },
	data() {
		return {
			image: "",
		};
	},
	computed: {
		...mapState(["user"]),
		formatedContent() {
			//On vérifie si une url est présente dans le content:
			let formatedMessage = this.urlify(this.content);
			return formatedMessage + this.image;
		},
		formatedAuteur() {
			if (this.auteur) {
				return this.auteur.prenom + " " + this.auteur.nom;
			} else {
				return "Utilisateur supprimé";
			}
		},
		style() {
			if (this.utilisateurId == this.user.id) {
				//Message envoyé
				return "message__sent";
			} else {
				//Message reçu
				return "message__received";
			}
		},
		formatedId() {
			return "messageID_" + this.id;
		},
		formatedDate() {
			return DateManager.formatHour(this.date);
		},
	},
	methods: {
		// Mets en forme si présence d'URL ( + ajout image dans le contenu du message si besoin )
		urlify(pText) {
			var urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
			return pText.replace(urlRegex, (url) => {
				this.url = url;
				if (!this.isThisAnImage(url)) {
					//Classic URL
					return '<a href="' + url + '" target="_blank" class="link">' + url.substring(0, 30) + "..." + "</a>";
				} else {
					//Image URL
					this.image =
						`<a href="` +
						url +
						`" target="_blank" class="">` +
						`<img class="img-fluid" style="position=relative;" src="` +
						url +
						`" ></a>`;
					return '<a href="' + url + '" target="_blank" class="link">' + url.substring(0, 30) + "..." + "</a>";
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
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	&__sent {
		& .auteur {
			margin-right: auto;
		}
		& .message {
			background-color: rgb(37, 153, 207);
			color: black;
			border-radius: 20px 20px 20px 0px;
			padding-top: 0.3rem;
			padding-bottom: 0.3rem;
			overflow-wrap: break-word;
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
			border-radius: 20px 0px 20px 20px;
			padding-top: 0.3rem;
			padding-bottom: 0.3rem;
			overflow-wrap: break-word;
		}
	}
	& img {
		position: relative;
		bottom: 0;
		z-index: 1000;
	}
}

.link {
	color: indigo;
}
</style>
