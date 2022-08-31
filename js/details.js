const detailsContainer = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("char_id")

const url ="https://breakingbadapi.com/api/characters/" + id;

async function getCharacter() {

    try{
        const response = await fetch(url)
        const details = await response.json()
        console.log(details)
        createHTML(details)
    } catch {
        console.log(error)
    }
    
}

getCharacter()

function createHTML(details) {
    detailsContainer.innerHTML = `<h1>${details.char_name}</h1>`
}