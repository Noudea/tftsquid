import fetch from 'node-fetch';


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





export function getSummonerByName(reqparams) {
    return new Promise((resolve, reject) => {

        var params = {
            mode: 'cors',
            cache: 'default',
            ...globalparams
        };

        console.log(reqparams)
        fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ reqparams.username, params)
            .then((response) => response.json())
            .then(result => {
                console.log(result),
                resolve(result)
            })
            .catch(error => console.log(error))
    })
    
}



export function getMatchList(puuid) {
    return new Promise((resolve, reject) => {

        var params = {
            mode: 'cors',
            cache: 'default',
            ...globalparams
        };

        console.log(puuid)
        fetch('https://europe.api.riotgames.com/tft/match/v1/matches/by-puuid/'+ puuid +'/ids?count=20', params)
            .then((response) => response.json())
            .then(result => {
                console.log(result),
                    resolve(result)
            })
            .catch(error => console.log(error))
    })

}
