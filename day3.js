console.log("Breakout Room 3")
console.log("Problem 1: ")
// print odds 1-20
function checkodd(num) {
    return (num%2!=0);
}

for( i=1; i<=20; i++) {
    if (checkodd(i)) {
        console.log(i);
    }
}

console.log("Problem 2: ")
//sum and print 1-5
var sum = 0;
for (i=1; i<=5; i++) {
    console.log("Num: "+i);
    sum+=i;
    console.log("Sum: " + sum);
}






// Extra Crap
// console.log("Hard Way")

// for( i=0;i<20; i++)  {
//     if((i+1)%2!=0) {
//         console.log(i+1);
//     }
// }

// console.log("Easy Way")

// for( i=1; i<=20; i=i+1)  {
//     if(i%2!=0) {
//         console.log(i);
//     }
// }