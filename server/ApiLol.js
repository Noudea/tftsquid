import fetch from 'node-fetch';


//api key de pour les requetes lol + parametre globaux
const apiKey = 'RGAPI-f86e5079-752e-4004-8e0d-490a98c95c02'
const globalparams =
{
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
        "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://developer.riotgames.com",
        "X-Riot-Token": "RGAPI-9d8eeb71-ff59-4e9b-a317-2818d9a6c0e5"
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
        fetch('https://europe.api.riotgames.com/tft/match/v1/matches/by-puuid/'+ puuid +'/ids?count=2', params)
            .then((response) => response.json())
            .then(result => {
                console.log(result),
                    resolve(result)
            })
            .catch(error => console.log(error))
    })

}

export function getMatch(reqparams) {
    return new Promise((resolve, reject) => {

        var params = {
            mode: 'cors',
            cache: 'default',
            ...globalparams
        };
        console.log(reqparams)
        fetch('https://europe.api.riotgames.com/tft/match/v1/matches/' + reqparams.matchId, params)
            .then((response) => response.json())
            // .then(result => {
            //     console.log(result),
            //         resolve(result)
            // })
            .then((result) => {
                // console.log('mon resultat', result)
                console.log('mon resultat', result.status ? result.status.status_code : 'c bon')
                if (result.status && result.status.status_code === 429) {
                    // getName.call(getName(reqparams))
                    console.log(result.status.message)
                }
                else {
                    resolve(result)
                }

                // if(result)
                // {
                //     console.log('statuuuut 429')
                // } else{
                //     resolve(result)
                // }
            })
            .catch(error => console.log(error))
    })
}

export function getName(reqparams) {
    return new Promise((resolve, reject) => {

        var params = {
            mode: 'cors',
            cache: 'default',
            ...globalparams
        };

        console.log('reqparams1',reqparams)
       
            fetch('https://euw1.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/' + reqparams.puuid, params)
                .then((response) => response.json())
                // .then(result => {
                //     console.log('le resultat de getname' , result),
                //         resolve(result)
                // })
                .then((result) =>
                {
                    // console.log('mon resultat', result)
                    console.log('mon resultat', result.status ? result.status.status_code : 'c bon')
                    if(result.status && result.status.status_code=== 429)
                    {
                        console.log(result)
                    }
                    else
                    {
                        resolve(result)
                    }
                   
                    // if(result)
                    // {
                    //     console.log('statuuuut 429')
                    // } else{
                    //     resolve(result)
                    // }
                })
                .catch(error => console.log(error))
        })

        
}

// export function getName2(reqparams) {
//     return new Promise((resolve, reject) => {

//         var params = {
//             mode: 'cors',
//             cache: 'default',
//             ...globalparams
//         };

//         console.log('reqparams1', reqparams)

//         fetch('https://euw1.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/' + reqparams.puuid, params)
//             .then((response) => response.json())
//             // .then(result => {
//             //     console.log('le resultat de getname' , result),
//             //         resolve(result)
//             // })
//             .then((result) => {
//                 // console.log('mon resultat', result)
//                 console.log('mon resultat', result.status ? result.status.status_code : 'c bon')
//                 if (result.status && result.status.status_code === 429) {
//                     // console.log('reqparams2', reqparams)
//                     // getName.call(getName(reqparams))
//                     getName(reqparams)
//                 }
//                 else {
//                     resolve(result)
//                 }

//                 // if(result)
//                 // {
//                 //     console.log('statuuuut 429')
//                 // } else{
//                 //     resolve(result)
//                 // }
//             })
//             .catch(error => console.log(error))
//     })
// }

export function apiCallHandler(callback) {
    return new Promise((resolve,reject) =>
    {
        if(callback)
        {
            resolve()
        }
        else
        {
            reject(c)
        }
    })
}




