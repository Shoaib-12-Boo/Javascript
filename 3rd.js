/*
// for loop in javascript
for (var i=0 ; i<5 ; i++ ){
    console.log(i);
}

for (var i=10 ; i > 0 ; i-- ){
    console.log(i);
}
*/

//  more example 
/*var num = prompt("Please Enter your number");
for ( i=1 ; i<=10 ; i++){
    console.log(num + "x "  +i+" = " +(num * i));
}

//  for break and continue in javascript
 for (var i=0 ; i<5 ; i++) {
    if ( i == 3) {
        break ;
    }
    console.log("I = "+i);
 }
 */
/*
 let n = 5; 
 let string = "";
 
 for(let i = 0; i < n; i++) { 
   for(let j = 0; j < n; j++) { 
     string += "*";
   }
   string += "\n";
 }
 console.log(string);


var i, j;
for(i=1; i <= 5; i++)
 {
  for(j=1; j<=i; j++)
 {
   document.write('*');
  }
   document.write('<br/>');
 }

//  Array in javascript
var foods1 = ["Pizza","Burger","Sandwich"];
var foods2 = new Array("Pizza","Burger","Sandwich");
var a = foods1[0];
var b = foods1[1];

alert(a);
alert(b);
alert(foods1[2]);

// Run full array
document.write(foods1);

// Add or update element by using index in array
var foods = [];

foods[0] = "Pizza";
foods[1] = "Burger";
foods[2] = "Snacks";
console.log(foods);

foods[7] = "Sandwich";
console.log(foods);

// Length property in javascript 
console.log(foods);
console.log(foods.length);


// push function in javascript
var drinks = [];
drinks.push ("Coke");
drinks.push ("Pepsi");
drinks.push ("7up");
document.write(drinks);

// Nested loop in (javascript
for (var i =0 ; i<5 ; i++){
  for (var s=0 ; s<3 ; s++){
    console.log("I = "+i+ " J " +j);
  }
}
*/
// stack (pop) in javascript 
var foods3 = [];
foods3.push ("Pakistan");
foods3.push ("India");
foods3.push ("China");
console.log(foods3);

foods3.pop ();
console.log(foods3);

// queue in javascript
var foods4 = [];
foods4.push("JAVA");
foods4.push("HTML");
foods4.push("CSS");
console.log(foods4);

foods4.shift();
console.log(foods4);

// unshift in javascript
var foods5 = ["Math"," Chemistry", "Urdu"];
console.log(foods5);

foods5.unshift("Math");
console.log(foods5);
foods5.unshift("English");
console.log(foods5);

// Array with loops in javascript
var country = ["Pakistan", "India", "China"];
for (var i=0; i<country.length; i++) {
  console.log(country[i]);
}

var country = [55 , 6 , 23 , 55 , 42 , 75 , 1];
for (var i=0; i<country.length; i++) {
  console.log(country[i]);
}

var arr = [55 , 6 , 23 , 55 , 42 , 75 , 1];
for (var i=0; i< arr.length; i++) {
  arr[i] = arr[i] * 2 ;
}
for (var j=0 ; j<arr.length; j++){
  console.log(arr[j]);
}

// task in Arrays javascript
var arr = [22 ,33 , 45 , 34 , 345 , 65];
var input = parseInt(prompt("Enter number for find..."));

console.log("user input" , input);
for (var i=0 ; i<arr.length ; i++){
  console.log(arr[i]);
  if (arr[i] === input){
    console.log("Found "+ input+ " On index " +i); 
    break;
  }
  else {
    console.log("Not Found");
  }
}

// splice function in javascript
var foods6 = ["Pizza" , "Burger" , "Fires" , "Sandwich"];
console.log(foods6);
foods6.splice(1 , 0 , "Snacks");
console.log(foods6);

var foods7 = ["Pizza" , "Burger" , "Fires" , "Sandwich"];
console.log(foods7);
foods7.splice(1 , 2 , "Snacks");
console.log(foods7);

// slice function in javascript
var foods8 = ["Pizza" , "Burger" , "Fires" , "Sandwich"];
console.log(foods8)
var arr = foods8.slice(1,3);
console.log(foods8);
console.log(arr);