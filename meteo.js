//Comme pour les coordonnées, il ne faut
//pas oublier les paramétrages essentiels

require("dotenv").config();

const axios = require("axios");

const API_KEY = process.env.API_WEATHER_KEY;

//La fonction

const meteo = async (localisation) => {
  //On déclare la variable temp
  let temp;

  try {
    //On déstructure data.

    //Puis dans l'URL, on recherche la latitude et la longitude qu'on aura trouver dans coordonnees.js

    const { data } = await axios(
      `http://api.openweathermap.org/data/2.5/weather?lat=${localisation.latitude}&lon=${localisation.longitude}&appid=${API_KEY}`
    );

    //On convertit la température des kelvins en Celsius
    temp = (data.main.temp - 273.15).toFixed(2);

    return temp;
  } catch (err) {
    console.log(err.message);
  }
};

//Export de la fonction

module.exports = meteo;
