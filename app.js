//On importe les fonctions de
//coordonnees.js et meteo.js

const coordonnees = require("./coordonnees");
const meteo = require("./meteo");

//La grande fonction

const app = async () => {
  try {
    //On stocke le retour de la fonction coordonnes dans la variable GPS

    //Avec slice(2), on sélectionne le 3ème élément de la liste process.argv
    //(c-à-d l'éventuel argument que l'on ajoute dans la ligne de commande)

    //Le souci, c'est qu'avec slice(2) seul, on a une liste avec un seul
    //élément et non un str. Pour avoir un str, il faut faire .join(", ")

    //Dans la doc Mozilla de .join(), on nous informe que le séparateur
    //par défaut est une virgule.

    const GPS = await coordonnees(process.argv.slice(2).join(", "));

    //Puis on utilise GPS dans la fonction meteo pour
    //connaître la météo aux coordonnées stockées dans
    //la variable GPS.
    //Le retour de la fonction meteo est stockée dans
    //la variable temp

    const temp = await meteo(GPS);

    //Le message final
    console.log(
      `La température à ${process.argv.slice(2).join(", ")} est de ${temp}°C`
    );
  } catch (err) {
    console.log(err.message);
  }
};

//Appel de la fonction app

app();
