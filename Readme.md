# :fire: Groupomania Firepit :fire: #

## Backend server:

Important ! Le serveur Backend doit être lancé en premier, sinon le frontend utilisera le port 8080 à la place du backend.

`nodemon server` / `node server` depuis le dossier _/backend_

La base de données utilisée est une DB Potrgres dont le nom est: _Groupomania_firepits_  
Vous retrouverez toutes les informations concernant la configuration de la base de données au chemin suivant:  _backend\app\config\db.config.js_  
  
Le serveur est configuré pour fonctionner en mode 'dev', il recrééra donc une DB vide de toutes informations à chaque démarrage.  
Si vous souhaitez le faire fonctionner en mode 'prod', il suffit de modifier le fichier suivant:  
_backend\server.js_  
et de remplacer la l20 par:  
`db.sequelize.sync().catch((err) => console.log(err));`  

## Frontend:

`npm run serve` depuis le dossier _/frontend_

## Test panel:

Pour une utilisation plus simple, j'ai mis à disposition un panel de test qui peut se toggle pour une meilleure expérience d'utilisation.  
**Le serveur utilisant un système d'authentification, merci de créer un compte avant l'utilisation des fonctionnalités du pannel de test pour éviter de recevoir un code erreur 401 du serveur et ainsi vous retrouver à la page de login.**  
  
Dans ce panel, vous trouverez tout ce qu'il faut pour avoir un aperçu de l'application dans son ensemble:  

-   Un générateur automatique de profils
-   Un générateur automatique de post (appelés ici Firepits)
-   Un générateur de messages.
  
Ces outils de test sont à utiliser dans l'ordre. Merci de patienter un minimum entre chaque clic sur les boutons du panel, le serveur appréciera.
Pour apprécier le layout final, vous pouvez toggle le panel de test par le biais du bouton associé: 🛠
