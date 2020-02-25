function getNumber(num) {
    var input_var = document.getElementById('display');
    switch (num) {
        case 1:
            input_var.value += '1';
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
        case '.':
            input_var.value += '.';
            break;
    }
}

function clearScreen() {
    //when function called input and answer .value = ""
    document.getElementById('display').value = "";
    document.getElementById('answer').value = "";

}

//get the mathematical sign
function getOperation(operation) {
    var input_var = document.getElementById('display');
    switch (operation) {
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

//using the eval function take the string and compute
function compute() {
    var input_var = document.getElementById('display');
    ans = eval(input_var.value).toFixed(7);
    document.getElementById('display').value = ans /*.replace(/0+$/,''); //using regex as there were answers with trailing zeros */
}

var x = 0;
function brackets() {
    //when bracket pushed once insert first bracket
    //when bracket pushed again insert second bracket
    var input_var = document.getElementById('display');
    if (x ==0){
        input_var.value += '(';
        x = 1;
    }else if (x == 1) {
        input_var.value += ')';
        x = 0;
    } 
}