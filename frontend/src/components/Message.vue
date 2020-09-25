<template>
	<div>
		<b-container :class="style" class="mb-3">
			<b-row>
				<small class="auteur font-italic">
					{{ auteur }}
				</small>
			</b-row>
			<b-row :id="formatedId">
				<p class="message col-6" v-html="formatedContent"></p>
			</b-row>
			<!-- <b-row>
				<div class="message messageImage__container col-6" v-if="image" v-html="image"></div>
			</b-row> -->
		</b-container>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "Message",
	props: { content: String, prenom: String, nom: String, utilisateurId: Number, id: Number },
	data() {
		return {
			image: "",
		};
	},
	computed: {
		...mapState(["user"]),
		formatedContent() {
			//Formatage du contenu du message

			//On vérifie si une url est présente dans le content:
			let formatedMessage = this.urlify(this.content);
			return formatedMessage + this.image;
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
		formatedId() {
			return "messageID_" + this.id;
		},
	},
	methods: {
		urlify(pText) {
			var urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
			return pText.replace(urlRegex, (url) => {
				this.url = url;
				if (!this.isThisAnImage(url)) {
					//Classic URL
					return '<a href="' + url + '" target="_blank" class="link">' + url.substring(0,30)+"..."+ "</a>";
				} else {
					//Image URL
					this.image =
						`<a href="` + url + `" target="_blank" class="">` +  `<img class="img-fluid" style="position=relative;" src="` +
						url +
						`" ></a>`;
					return '<a href="' + url + '" target="_blank" class="link">' + url.substring(0,30)+"..." + "</a>";
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
			border-radius: 10px 10px 10px 0px;
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
			border-radius: 10px 0px 10px 10px;
			padding-top: 0.3rem;
			padding-bottom: 0.3rem;
			overflow-wrap: break-word;
		}
	}
	& img{
		position: relative;
		bottom:0;
		z-index: 1000000;
	}
}

.messageImage {
	position: relative;
	&__container{
		height: 100%;
	}
}

#messageImage {
	position: fixed;
}

.link {
	color: indigo;
}
</style>
