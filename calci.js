//To get the values from input fields
var inputvalue = document.getElementById("inputvalue")
function getInput(num){
    inputvalue.value = inputvalue.value + num
}

//To clear all the characters
function clearAll(){
    inputvalue.value = ""
}

//To perform calculations
function calculate(){
    try{
        inputvalue.value = eval(inputvalue.value)
    }
    catch{
        alert("Invalid Input")
    }
}
