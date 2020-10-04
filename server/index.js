
import { getSummonerByName, getMatchList, getMatch, getName }  from './ApiLol.js';
import express from 'express';
import fetch from 'node-fetch'

const app = express();
app.listen(8000, () => console.log('listening at 8000'))
app.use(express.static('public'));



// SANS MODULE IMPORT
// const app = express()
// utilisation de npm fetch
// const fetch = require('node-fetch');
// const { json } = require('express');
// const express = require('express')





//api key de pour les requetes lol + parametre globaux
const apiKey = 'RGAPI-3f63f5e6-43a0-4e4b-b47e-fa13ee325567'
const globalparams =
{
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
        "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://developer.riotgames.com",
        "X-Riot-Token": "RGAPI-3f63f5e6-43a0-4e4b-b47e-fa13ee325567"
    }
}


app.get('/getSummonerByName/:username',(request, response) => 
{
    response.set('Access-Control-Allow-Origin', '*')
    const reqparams = 
    {
        username : request.params.username,
    }
    // console.log(reqparams)
    getSummonerByName(reqparams).then(result => {
        const summonerDetails = result
        getMatchList(summonerDetails.puuid).then(matchList =>
            {
                //on fusionne les 2 objets
            let fusion = Object.assign(summonerDetails,{matchList})
                response.json(fusion)
            })
    })
})

app.get('/getMatch/:matchId',(request,response) =>
{
    response.set('Access-Control-Allow-Origin', '*')
    const reqparams = 
    {
        matchId: request.params.matchId
    }
    getMatch(reqparams).then (result => {
        // console.log(result)
        response.json(result)
    })
})

app.get('/getName/:puuid', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    const reqparams =
    {
        puuid: request.params.puuid
    }
    getName(reqparams).then(result => {
        // console.log(result)
        response.json(result)
    })
})

app.get('/getMatchNames/:matchId', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    const reqparams =
    {
        matchId: request.params.matchId
    }
    getMatch(reqparams)
    .then((result)=>
    {
        getName(result.info.participants[0])
        .then((result) =>
        {
            response.json(result.name)
        })
    })
})




// function getSummonerByName() {
//     return new Promise((resolve, reject) => {

//         var params = {
//             mode: 'cors',
//             cache: 'default',
//             ...globalparams
//         };


//         fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/CaptainNoodle', params)
//             .then((response) => response.json())
//             .then(result => {
//                 console.log('reponse api get summoner by name ', result),
//                     resolve(result)
//             })
//             .catch(error => console.log(error))
//     })
// }
