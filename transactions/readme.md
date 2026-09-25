                                             JavaScript Topics


1) Execution Context 

-> the abstract environment where code is evaluated and executed

var n = 5;

function square(n) {
  var ans = n * n;
  return ans;
}

var square1 = square(n);
var square2 = square(8);  

console.log(square1)
console.log(square2)


2) Call Stack 

-> a data structure that the JavaScript engine uses to manage and keep track of the execution of functions in a program . It operates on the Last-In, First-Out (LIFO) principle

function greeting() {
  // [1] Some code here
  sayHi();
  // [2] Some code here
}
function sayHi() {
  return "Hi!";
}

// Invoke the `greeting` function
greeting();

// [3] Some code here

3) Hoisting

-> variable and function declarations are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed


console.log((addone(5)));
function addone(num){
  return num + 1;
}

addTwo(5)
// give a error because function access through a varible.
const addTwo = function(num){
return num + 2;
} 	Closures

4) Lexical scope

-> the ability of an inner function to access variables and functions defined in its outer function or parent function, but not the other way around

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();