// prompt in javascript 
var number = prompt("What is your number?");
console.log(number);
var num_number = number + 5 ;
console.log(num_number);

//  comparisons operator in javascript
a = 5;
b = 6;

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);

// logic operator in javascript         AND OR NOT DOUBLE NOT
// AND(&&) Operator in javascript
var a = 5;
var b = 6;
var c = a < b && b < 10 ;
alert(c);

//  OR(||) operator in javascript
var a = 5;
var b = 6;
var c = a < b || b < 10 ;
alert(c);

// NOT operator in javascript
var a = 60;
var b = !(a < 60);
alert(b);

var c = 50;
var d = !(d > 40);
alert(d);

var g = 60;
var h = g > 100 ;
var j = !h;
var k = !(g > 100);
console.log("g = "+g );
console.log("h = "+h );
console.log("j = "+j );
console.log("k = "+k );

// condition if else in javascript
var number  = 50;
if(number > 60) {
    console.log("Passed = "+number);
}
else {
    console.log("Fail = "+number);
}

// if else if in javascript
var score = 75;
 if ( score > 80) {
    console.log("Grade A");
 }
 else if ( score > 70){
    console.log("Grade B");
 }
 else if ( score > 60){
    console.log("Grade C");
 }
 else {
    console.log("Condition Failed")
 }

//  2nd example
var score = prompt("What is your score");
score = parseInt(score); 
 if ( score > 80) {
    console.log("Grade A");
 }
 else if ( score > 70){
    console.log("Grade B");
 }
 else if ( score > 60){
    console.log("Grade C");
 }
 else {
    console.log("Condition Failed")
 }

//  Nested if in javascript
var score = 92;
if (score > 80){
    console.log("Grade A");
    if (score > 90) {
        console.log("Reward 100");
    }
    else {
        console.log("Reward 50");
    }
}
else {
    console.log("Failed");
}