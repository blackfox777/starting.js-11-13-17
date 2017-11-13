// this declares the variable my vare

var myVar;
// this sets the value of the myvar variable and sets it to the string
myVarq = 0.7;

var myName = 'Matt';

var mySentence = "What's up";

var thing = 'and he said \Whats up\ to me';

var myLongString ="This actually isn't too long.";


var myLongString= "this actually isn't too long.";

var myboolean = false;

var numA = 14;
var numB = 27;

// addition in js is done with the + symbol
var sumofAandB = numA + numB;

// subtraction
var numAMinusNumB = numA - numB;

//multiplication is done with an *
var numC = 3 * 3;


//division is done with /
var numD = 4 / 2;

// Exponents are done with **
var myExponent = 2 ** 4;

//modulus is done with a % returning the remainder after division
//5 % 2 = 1

var myModulus = 5 % 2;

// This is concatenation, adding strings together spaces put in manually
var myFullName = myName + " " + "Matt";


var me = {
  name: "Matt Williams",
  age: 29,
  isAwesome: true,
  head: {
    eyes: 2,
    hairColor: 'black',
    brain: true
  }
};

// Properties on the object woulsd generally be acessed usion dot notation
// me.name would return MATT WILLIAMS

console.log(me.age);
// This sets the age property on the me object to the vallue of 30
me.age = 30;

console.log(me.age);

// Arrays are key value pairs where the key is a number,
// arrays are created using {}, each element within an array is separated by a,

var myArr = [55,"Lion", true, me];

// Arrays in Javascript start with a 0 ind to acces elements within an array,
//use [] with the index number, myArr[0] would be 55, my Arr[1] would be Lion

console.log(myArr[0]);

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday"];

// Objects can hold arrays as the value for Properties
// This adds a hobbies property to the me object and sets it to be an array
me.hobbies = ["Code", "Music", "Food", "Games" ];

console.log(me.hobbies[0]);

var something;
// something is undefined the variable has been declared

console.log(something);
var somethingElse;

console.log(somethingElse);
// If js encounters a variable that does not exist, it will throw a error
// and stop executing any further script by default

// null is nothing
var nothing = null;

// This is a function declaration that can create a function called sayhello
function sayHello(){
  console.log("Welcome to the Jungle");
}
// function declaration do not end in a ;

// This calls or invokes the sayHello function.
sayHello();

// This works because function declarations are hoisted to the top of the document when read by the browser
sayHelloTo("meeee");

//variables created within a function are only available within together
//function, this is called function scope
function sayHelloTo(name) {
  var message = "Welcome to the Jungle " + name + "!";
}

// SayHelloTo("Richard Simmons")
//SayHelloTo("Paul Newman  ")
//SayHelloTo("myFullName")
//SayHelloTo();

// This is a function expression that creates a function calledsumNums
var sumNums = function(firstNum, secondNum) {
  var sum = firstNum + secondNum;
//


// This will return the value of the sum variable to which the sum variable to where that creates
//Once a return statement is triggered no further code within the function is executed.
return sum;
};
sumNums(2,2);

//console.log( sumNums(2,2) x)
var mySum = sumNums(923, 13454);
