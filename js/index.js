//Question

const url = "https://breakingbadapi.com/api/characters/";

const dropDown = document.querySelector("select");
const boxes = document.querySelector(".list")

console.log(dropDown);

async function getCharacters() {

    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    
        for (let i = 0; i < data[i].length; i++) {
            if (i === 10){
                break
            }
        }
    
        const addBoxes = data;
    
        addBoxes.forEach(function(data) {
            boxes.innerHTML += `<a href="details.html?id${data.char_id}" class="container">`
        });
    } catch {
        console.log(error)
    }

}


getCharacters()

