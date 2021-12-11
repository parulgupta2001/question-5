var red = document.querySelector("#red")
var green = document.querySelector("#green")
var blue = document.querySelector("#blue")
var input = document.querySelector("#input-text")


function colorChangeToRed() {
    var rInput = input.value 
    input.style.color = "red"
}


function colorChangeToGreen() {
    var gInput = input.value 
    input.style.color = "green"
}


function colorChangeToBlue() {
    var bInput = input.value
    input.style.color = "blue"
}



red.addEventListener("click",colorChangeToRed)
green.addEventListener("click",colorChangeToGreen)
blue.addEventListener("click",colorChangeToBlue)