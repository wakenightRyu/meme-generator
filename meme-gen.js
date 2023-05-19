const topField = document.getElementById("top")
const bottomField = document.getElementById("bottom")
const urlField = document.getElementById("url")
const submitBtn = document.getElementById("submit-button")
const inputs = document.getElementsByClassName("input-fields")
const cardContainer = document.querySelector(".card-container")
const del = document.getElementsByClassName(".delete")
const cards = []

submitBtn.addEventListener("click", function(event){
    event.preventDefault()
    if (topField.value && bottomField.value && urlField.value){     
        createMeme()
    }        
})  

function createMeme(){
    let card = document.createElement("div")
    cardContainer.prepend(card)
    card.classList.add("card")
    cards.push(card)

    // add top gradient
    let topGradient = document.createElement("div")
    card.prepend(topGradient)
    topGradient.classList.add("top-gradient")
    let h2 = document.createElement("h2")
    topGradient.prepend(h2)
    h2.innerText = topField.value

    //add bottom gradient
    let bottomGradient = document.createElement("div")
    card.prepend(bottomGradient)
    bottomGradient.classList.add("bottom-gradient")
    let p = document.createElement("p")
    bottomGradient.prepend(p)
    p.innerText = bottomField.value

    // add image
    let image = document.createElement("img")
    image.classList.add("image")
    image.src= urlField.value.replace(/['"]/g, '')  // needed to remove the double "'
    card.prepend(image)

    // add edit/delete
    let edit = document.createElement("button")
    edit.innerText = "Delete meme"
    edit.classList.add("delete")
    card.append(edit)
    // add card onmouseover event listener
    card.onmouseover = function(){
        edit.style.visibility="visible"
    }
    card.onmouseout = function(){
        edit.style.visibility="hidden"
    }
    edit.addEventListener("click", function(){
        card.remove() 
    })

    clearInputs()  // needed to clear input fields
}

function clearInputs(){
    topField.value = ""
    bottomField.value = ""
    urlField.value = ""
}






