const baseURL = "https://pokeapi.co/api/v2/pokemon/"


const identifyPokemon = () => {
    fetch(baseURL + "boltund")
        .then(res => res.json())
        .then(json => {
            let boltundName = json.name
            let boltundImg = json.sprites.other['official-artwork'].front_default
            let boltund = [boltundName, boltundImg]
            console.log(boltund);
        })

    fetch(baseURL + "stoutland")
        .then(res => res.json())
        .then(json => {
            let stoutlandName = json.name
            let stoutlandImg = json.sprites.other['official-artwork'].front_default
            let stoutland = [stoutlandName, stoutlandImg]
            console.log(stoutland);
        })

    fetch(baseURL + "houndoom")
        .then(res => res.json())
        .then(json => {
            let houndoomName = json.name
            let houndoomImg = json.sprites.other['official-artwork'].front_default
            let houndoom = [houndoomName, houndoomImg]
            console.log(houndoom);
        })

    fetch(baseURL + "arcanine")
        .then(res => res.json())
        .then(json => {
            let arcanineName = json.name
            let arcanineImg = json.sprites.other['official-artwork'].front_default
            let arcanine = [arcanineName, arcanineImg]
            console.log(arcanine);
        })

    fetch(baseURL + "suicune")
        .then(res => res.json())
        .then(json => {
            let suicuneName = json.name
            let suicuneImg = json.sprites.other['official-artwork'].front_default
            let suicune = [suicuneName, suicuneImg]
            console.log(suicune);
        })
}

const displayPokemon = (boltund, stoutland, houndoom, arcanine, suicune) => {
    const wrapper = document.getElementsById('card-section') // grabs the container
    for (let each of pokemon) {
        let card = document.createElement("div") // creates card
        let card_name = document.createElement("div") // creates header/title
        let card_body = document.createElement("div") // creates body
        let card_img = document.createElement("img")
        let card_title = document.createElement("h5")
        let button = document.createElement("a")

        card.className = "card" // assigns card with class 'col'
        card_body.className = "card-body" // assigns body to class poke-card-body
        card_title.innerText = `${each[0]}` // changes h5 text to pokemon name
        card_img.innerHTML = `${each[1]}` // places image inside of card body
        button.className = "button-colors" // assigns class to button

        card.appendChild(card_name)
        card.appendChild(card_body)
        card.appendChild(card_title)
        card.appendChild(button)
        wrapper.appendChild(card)
    }
}
