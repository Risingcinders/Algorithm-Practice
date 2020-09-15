// // data type focused
// // strings
// "Text";
// "text";
// `text`;

// // numbers
// 12;
// 22;
// 1.25;
// 0 - 50;

// // booleans
// true;
// false;

// Variables
var x = 2;
var y = "string";
var z = true;
var evennumbers = [];

// console.log(y);

for (i = 0; i<10; i++) {
    x++; 
    if (x%2 == 0) {
        console.log( x + " is even" );
        evennumbers.push(x);
    }
}

console.log(evennumbers)

for ( i = 0; i<2; i++) {
    console.log("beep")
}