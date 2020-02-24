function getNumber(num){
    var input_var = document.getElementById('input');
    switch(num){
        case 1:
        input_var.value += '1';
        //console.log(1);
        break;
        case 2: 
        input_var.value += '2'; 
        break; 
        case 3: 
        input_var.value += '3';
        break;
        case 4: 
        input_var.value += '4';
        break;
        case 5: 
        input_var.value += '5';
        break;
        case 6: 
        input_var.value += '6';
        break;
        case 7: 
        input_var.value += '7';
        break;
        case 8: 
        input_var.value += '8';
        break;
        case 9: 
        input_var.value += '9';
        break;
        case 0: 
        input_var.value += '0'; 
        break;
    }
}

function clearScreen(){
//when function called input and answer .value = ""
    document.getElementById('input').value = "";
    document.getElementById('answer').value = "";
}

//get the mathematical sign
function getOperation(operation){
    var input_var = document.getElementById('input');
    switch(operation){
        case '+':
            input_var.value += '+';
            break;
        case '-':
            input_var.value += '-';
            break;
        case '*':
            input_var.value += '*';
            break;
        case '/':
            input_var.value += '/';
            break;
        case '+/-':
            input_var.value += '-' + input_var.value;
    }
}

//
function backspace()

function compute(){

}