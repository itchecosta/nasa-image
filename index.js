require("dotenv").config();
const terminalImage = require("terminal-image");
const got = require('got');

async function showImage(img){
    const body = await got(img).buffer();
    console.log(await terminalImage.buffer(body));
}

async function getAPOD(){
    const date = '&date=2021-01-24';
    const dados = await got('https://api.nasa.gov/planetary/apod?api_key='+process.env.API_KEY+date, {responseType: 'json', resolveBodyOnly: true});
    showImage(dados.url);
}

getAPOD();