//array to save the number pressed.
let numDisplay = []
//array with 3 elements [1, +, 2]
let computeArr = []
//boolean to see if the last thing pressed was an operation or number
let lastPressedOp = false
let numberVal = 0

document.onkeydown = function(event) {  
    switch (event.keyCode) {
        case 49: //1
            getNumber(1);
            break;
        case 50: //2
            getNumber(2);
            break;
        case 51: //3
            getNumber(3);
            break;
        case 52: //4
            getNumber(4);
            break;
        case 53: //5
            getNumber(5);
            break;
        case 54: //6
            getNumber(6);
            break;
        case 55: //7
            getNumber(7);
            break;
        case 56: //8
            getNumber(8);
            break;
        case 57: //9
            getNumber(9);
            break;
        case 48: //10
            getNumber(0);
            break;
    }
}

function getNumber(num) {
  numDisplay.push(num)
  //display the joined elements of the array.
  numberVal = numDisplay.join('')
  document.getElementById('display').value = numberVal
  // console.log(numberVal);
  lastPressedOp = false // the last pressed button was a number.
}

function clearScreen() {
  numberVal = 0; // save the sum so more calculations can be done
  //clear the arrays 
  document.getElementById('display').value = numberVal;
  computeArr = [];
  numDisplay = []; 
  lastPressedOp = false;
}

function minus(){
    //if operation pressed is minus and the computeArr is 0 then add a minus and push number val
}

//get the mathematical sign
function getOperation(operation) {
  if (!lastPressedOp) {
    // if the last thing pressed is not a number then...
    lastPressedOp = true
    computeArr.push(parseFloat(numberVal, 10)) //push number val
    computeArr.push(operation) //push operation
    document.getElementById('display').value = operation
    numDisplay = [] //reset the display num to empty;
    numberVal = 0;
  }
}

//get rid of the eval function take the string and compute
function compute() {
  //push the last number
  computeArr.push(parseFloat(numberVal, 10))
  console.log(computeArr)
  var sum = computeArr[0] // sum = first value in the array
  for (var i = 1; i < computeArr.length; i++) {
    if (computeArr[i - 1] == '+') {
      sum = sum + computeArr[i]
    } else if (computeArr[i - 1] == '-') {
      sum = sum - computeArr[i]
    } else if (computeArr[i - 1] == '/') {
      sum = sum / computeArr[i]
    } else if (computeArr[i - 1] == '*') {
      sum = sum * computeArr[i]
    }
  }
  console.log(sum);
  document.getElementById('display').value = sum;
  numberVal = sum; // save the sum so more calculations can be done
  //clear the arrays 
  computeArr = [];
  numDisplay = []; 
  lastPressedOp = false;
}

// var x = 0
// function brackets() {
//   //when bracket pushed once insert first bracket
//   //when bracket pushed again insert second bracket
//   if (x == 0) {
//     document.getElementById('display').value = '('
//     x = 1
//   } else if (x == 1) {
//     document.getElementById('display').value = ')'
//     x = 0
//   }
// }

