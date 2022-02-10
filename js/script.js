//Question 1 

//const CORS_URL = "https://noroffcors.herokuapp.com/";
//const API_URL = "https://noroffcors.herokuapp.com/" + "https://elephant-api.herokuapp.com/elephants";

//async function getElephants() {
 // const response = await fetch(API_URL);
 // const results = await response.json();
 // console.log(results);
//}

//getElephants()

//https://noroffcors.herokuapp.com/


//Question 2

const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";
const header = { "headers": {
    "x-rapidapi-key": "e360b3c142msh1d6f915ac4d91e2p115aedjsn35105dc71911"
}}

async function callUrbanDictionary() {
  const response = await fetch(API_URL, header);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary()

