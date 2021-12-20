//Ne pas oublier la configuration des clés stockées dans lu fichier .env
require("dotenv").config();

//Le module Axios permet de réaliser des requêtes

const axios = require("axios");

//Stockage sécurisé de la clé d'accès pour l'API des coordonnées
//(la valeur de la clé est stockée dans la fichier .env. Pour éviter
//d'être hacké, on crée un fichier .gitignore pour que Git "ignore"
//le fichier .env (il est présent mais juste non-visible, il est commité
//par la fichier gitignore)

const API_KEY = process.env.API_COORDINATES_KEY;

//La grande fonction saisissant les coordonnées

const coordonnees = async (town) => {
  try {
    //La recherche

    const {
      data: { data },
    } = await axios(
      `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${town}`
    );

    //Afichage selon le nombre de résultats

    if (data.length === 0) {
      return "Aucun résultat";
    } else {
      //On retourne les coordonnées du 1er élément

      longitude = data[0].longitude;
      latitude = data[0].latitude;

      return { longitude, latitude };
    }
  } catch (err) {
    console.log(err.message);
  }
};

//On exporte cette fonction pour l'utiliser dans le programme principal

module.exports = coordonnees;
