function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log( "Hello, " + getFullName() );
  console.log( "Bye, " + getFullName() );

}

sayHiBye("manoh", "sauh");



let number2 = 2;
function addNumbers(number1) {
  console.log("1_" + number1);
  console.log("2_" + number2);
  console.log(number1 + number2);
}

function addNumbersGenerate() {
  let number2 = 10;
  addNumbers(number2);
}

addNumbersGenerate();


function greetCustomer() {
  const customerName = "john";
  function greetingMsg() {
    console.log("Hi! " + customerName);
  }
  return greetingMsg;
}

const callGreetCustomer = greetCustomer();
callGreetCustomer();


function countTheNumber() {
  var arrToStore = [];
  for (var x = 0; x < 9; x++) {
    arrToStore[x] = function () {
      return x;
    };
  }
  console.log("asdasd" + arrToStore)
  return arrToStore;
}

const callInnerFunctions = countTheNumber();
console.log(callInnerFunctions[1]())