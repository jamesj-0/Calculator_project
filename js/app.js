//array to save the number pressed.
let numDisplay = [];

//array with 3 elements [1, +, 2]
let computeArr = []; 

//boolean to see if the last thing pressed was an operation or number
let lastPressedOp = false;

var numberVal = 0;

function getNumber(num) {
    numDisplay.push(num);
    //display the joined elements of the array.
    numberVal = numDisplay.join("");
    document.getElementById('display').value = numberVal;
    // console.log(numberVal);
    lastPressedOp = false; // the last pressed button was a number.
}

function clearScreen() {
    //when function called input and answer .value = ""
    document.getElementById('display').value = "";
    document.getElementById('answer').value = "";

}

//get the mathematical sign
function getOperation(operation) {
    if(!lastPressedOp){ // if the last thing pressed is not a number then...
        lastPressedOp = true;
        computeArr.push(numberVal); //push number val
        computeArr.push(operation); //push operation
        document.getElementById('display').value = operation;
        console.log(computeArr);
        numDisplay = []; //reset the display num to empty;
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