var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elText = document.querySelector(".js-text");

function gretting(name){
    return "Assalomu alaykum " + name
}

elForm.addEventListener("submit",function(evt) {
    evt.preventDefault()

    var elInputValue = elInput.value;

    elText.textContent = gretting(elInputValue)
    
})



console.log(gretting("Avaz"));