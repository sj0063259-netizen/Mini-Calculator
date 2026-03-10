let display = document.getElementById("display")

let buttons = document.querySelectorAll("button")

buttons.forEach(button => {

button.addEventListener("click", function(){

let value = button.innerText

if(value === "C"){
display.value = ""
}

else if(value === "="){
display.value = eval(display.value)
}

else if(value === "x"){
display.value += "*"
}

else{
display.value += value
}

})

})