var inputFeild = document.getElementById("inputFeild");

function getVal(valueData){
    inputFeild.value += valueData
}

function deleteAll(){
    inputFeild.value = null
}

function squareRoot(){
    inputFeild.value *= inputFeild.value
}

function deleteOne(){
    inputFeild.value = inputFeild.value.slice(0,-1) 
}

function equal(){
    inputFeild.value = eval(inputFeild.value)
}