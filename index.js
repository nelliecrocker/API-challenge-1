const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=2000/"

const displayImage = (pokeImage, pokeName) => {
    let boltund = document.getElementById("boltund") //Boltund 835
    let pokeOne = document.getElementById("pokeOne")
    let stoutland = document.getElementById("stoutland") //Stoutland 507
    //     let imageThree = document.getElementById("imageThree") //Houndoom 228
    //     let imageFour = document.getElementById("imageFour") //Arcanine 58
    //     let imageFive = document.getElementById("imageFive") //Suicune 244
    boltund.src = pokeImage
    pokeOne.innerText = pokeName
    //     stoutland.src =
    //     houndoom.src =
    //     arcanine.src =
    //     suicune.src =
}

// fetching individual pokemon data - this works :)
fetch(baseURL)

    .then(res => res.json())
    .then(json => {
        let pokeArr = json.results
        console.log(pokeArr)
        let pokemonUrl = pokeArr[835].url
        console.log(pokemonUrl);

        fetch(pokemonUrl)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                let pokeName = json.name // pokemon name
                let pokeImage = json.sprites.other['official-artwork'].front_default // official image

                console.log(pokeImage);
                console.log(pokeName);
                displayImage(pokeImage, pokeName)
            })
    })

    

//look further into how to do this as a loop
// foreach ()
// fetch ["https://pokeapi.co/api/v2/pokemon/boltund","https://pokeapi.co/api/v2/pokemon/stoutland"]

//     .then(res => res.json())
//     .then(json => {
//         let pokeName = json.name // pokemon name
//         let pokeImage = json.sprites.other['official-artwork'].front_default // official image

//         console.log(pokeImage);
//         console.log(pokeName);
//         displayImage(pokeImage)
//     })

