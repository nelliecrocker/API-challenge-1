const baseURL = "https://pokeapi.co/api/v2/pokemon/?limit=150/"

fetch(baseURL)
    .then(res => {
       console.log(res)
       return res.json()
    })
    .then(json => {
        // console.log(json.results[1].url)
        let pokemonUrl = (json.results[1].url)
        fetch(pokemonUrl)
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(json => {
            console.log(json.height)
        })
        // let heightArr = json.results.map(pokemon => pokemon)
    }) 
