const baseURL = "https://pokeapi.co/api/v2/pokemon/"


const identifyPokemon = () => {
    fetch(baseURL + "boltund")
    .then(res => res.json())
    .then(json => {
        let boltundName = json.name
        let boltundImg = json.sprites.other['official-artwork'].front_default
        let boltundLink = "https://www.petfinder.com/search/dogs-for-adoption/us/in/46055/?breed%5B0%5D=Black+Labrador+Retriever&breed%5B1%5D=Chocolate+Labrador+Retriever&breed%5B2%5D=Labrador+Retriever&breed%5B3%5D=Yellow+Labrador+Retriever&distance=Anywhere"
        let boltund = [boltundName, boltundImg, boltundLink]
        console.log(boltund);
        displayPokemon(boltund)
    })
    
    fetch(baseURL + "stoutland")
    .then(res => res.json())
    .then(json => {
        let stoutlandName = json.name
        let stoutlandImg = json.sprites.other['official-artwork'].front_default
        let stoutlandLink = "https://www.petfinder.com/search/dogs-for-adoption/us/in/46055/?breed%5B0%5D=Scottish+Terrier&distance=Anywhere"
        let stoutland = [stoutlandName, stoutlandImg, stoutlandLink]
        console.log(stoutland);
        displayPokemon(stoutland)
    })
    
    fetch(baseURL + "houndoom")
    .then(res => res.json())
    .then(json => {
        let houndoomName = json.name
        let houndoomImg = json.sprites.other['official-artwork'].front_default
        let houndoomLink = "https://www.petfinder.com/search/dogs-for-adoption/us/in/46055/?breed%5B0%5D=Doberman+Pinscher&distance=Anywhere"
        let houndoom = [houndoomName, houndoomImg, houndoomLink]
        console.log(houndoom);
        displayPokemon(houndoom)
    })
    
    fetch(baseURL + "arcanine")
    .then(res => res.json())
    .then(json => {
        let arcanineName = json.name
        let arcanineImg = json.sprites.other['official-artwork'].front_default
        let arcanineLink = "https://www.petfinder.com/search/dogs-for-adoption/us/in/46055/?breed%5B0%5D=Golden+Retriever&distance=Anywhere"
        let arcanine = [arcanineName, arcanineImg, arcanineLink]
        console.log(arcanine);
        displayPokemon(arcanine)
    })
    
    fetch(baseURL + "suicune")
    .then(res => res.json())
    .then(json => {
        let suicuneName = json.name
        let suicuneImg = json.sprites.other['official-artwork'].front_default
        let suicuneLink = "https://www.petfinder.com/search/dogs-for-adoption/us/in/46055/?breed%5B0%5D=Galgo+Spanish+Greyhound&breed%5B1%5D=Greyhound&distance=Anywhere"
        let suicune = [suicuneName, suicuneImg, suicuneLink]
        console.log(suicune);
        displayPokemon(suicune)
    })
}

document.getElementById("primary-button").addEventListener("click", identifyPokemon, {
    once: true
  })


// let pokemon = ["boltund", "stoutland", "houndoom", "arcanine", "suicune"]


const displayPokemon = (pokemon) => {
    const wrapper = document.getElementById('card-section') // grabs the container
    // for (let each of pokemon) {
        let card = document.createElement("div") // creates card
        card.className = "card" // assigns card with class 'col'

        let card_img = document.createElement("img")
        card_img.className = "card-img-top"
        card_img.src = pokemon[1]

        let card_title = document.createElement("h5")
        card_title.className = "card-text"
        card_title.innerText = pokemon[0] // changes h5 text to pokemon name

        let button = document.createElement("a")
        button.className = "button-colors" // assigns class to button
        button.href = pokemon[2]
        button.innerText = "Adopt Me"

        // card.appendChild(card)
        card.appendChild(card_img)
        card.appendChild(card_title)
        card.appendChild(button)
        wrapper.appendChild(card)
    }
// }
