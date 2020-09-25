// var num = 5.67;
// var floor = Math.floor(num);
// console.log(floor);
// var ceil = Math.ceil(num);
// console.log(ceil);
// var trunc = Math.trunc(num);
// console.log(trunc);

// Math.random() produces a random number between 0 and 1
// It never actually gets to 1
// Math.ceil( Math.random() ) will round UP whatever number random produces
// Math.ceil( Math.random() * 6 ) will make numbers from 1 to 6
// Basically, multiply random by the number you want

// 1) Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).
function rollOne() {
    var rand = Math.ceil( Math.random() * 6 )
    // console.log(rand)
    return rand
}

// Create a new function named playStatistics(), which should call rollOne() eight
// times (but not print anything after each call). After the last of these eight calls, it should print out
// the lowest and highest values that it received from rollOne, among those eight calls.


function playStatistics() {
    var min = 7;
    var max = 0;
    var roll_arr = []
    for (i=0; i<8; i++) {
        roll_arr[i] = rollOne();
        if (roll_arr[i] > max) {
            max = roll_arr[i];
        }
        if (roll_arr[i] < min) {
            min = roll_arr[i];
        }

    }
    return{min,max};
}

console.log(playStatistics());

// Roll 8 dice
// Write down the result of each roll
// Compare all the numbers together and find the smallest and largest

var roll_arr = []
for (var i = 1 ; i <= 8 ; i++) {
    roll_arr.push( rollOne() )
}
// console.log(roll_arr)

var min = 7
var max = 0
for(var i = 0 ; i < roll_arr.length ; i++) {
    if ( roll_arr[i] > max ) {
        max = roll_arr[i]
    }
    // ADD MIN CODE HERE
}
// console.log(max)

// Make a copy of playStatistics and add code to make playStatistics2(), so
// that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.




// Copy playStatistics2 and add code to it to make playStatistics3(num), so that
// it will roll as many times as you want, instead of always doing this eight times.





// Make a copy of playStatistics3 and change it to create playStatistics4(num),
// so that at the end instead of the total sum, it prints the average roll.






//  Statistics Until Doubles
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns
// integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row.
// Display number of rolls, min, max, and average



function roll20() {
    rand20 = Math.ceil(Math.random()*20);
    return (rand20);
}

function untilDouble() {
    var min = 21;
    var max = 0;
    var sum = 0;
    var roll_arr = []
    var i = 0
    do {
        roll_arr[i] = roll20()
        if (roll_arr[i] > max) {
            max = roll_arr[i];
        }
        if (roll_arr[i] < min) {
            min = roll_arr[i];
        }
        sum += roll_arr[i];
        console.log(roll_arr[i])
        i++
    } while (roll_arr[i-1] != roll_arr[i-2])
    avg = sum/i;
    rollcount = i;
    dubs = roll_arr[i-1];
    return{min,max,rollcount, avg, dubs};
}

console.log(untilDouble());

