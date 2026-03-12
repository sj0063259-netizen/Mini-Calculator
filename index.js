let display = document.getElementById("display")

let buttons = document.querySelectorAll("button")

buttons.forEach(button => {

button.addEventListener("click", function(){

let value = button.innerText

if(value === "AC"){
display.value = ""
}

else if(value === "="){
display.value = eval(display.value)
}

else if(value === "x"){
display.value += "*"
}
else if(value === "ex"){
display.value += "**"
}
else if(value === "rem"){
display.value += "%"
}
else if(value === "(.)"){
display.value += "."
}
else if(value === "DEL"){
display.value = display.value.slice(0,-1);
}
else{
display.value += value
}

})

})