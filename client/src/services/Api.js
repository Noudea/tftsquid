const globalparams =
{
    headers: {

    }
}

export function getSummonerByName(username) {
    return new Promise((resolve,reject) => 
    {

        var params = {
            mode:'cors',
            cache: 'default',
            method: 'GET',
            redirect: 'follow',
            ...globalparams
        };


        fetch('http://localhost:8000/getSummonerByName/'+ username,params)
        .then((response) => response.json())
        .then(result =>
            {
                resolve(result)
            })
            .catch(error => console.log(error))
    })
}

