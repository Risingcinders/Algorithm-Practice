function biggleSize(donut) {
    for (i = 0; i < donut.length; i++) {
        if (donut[i] > 0) {
            donut[i] = "big";
        }
    }
    return donut;
}

// console.log(biggleSize([-1,3,5,-5]))

function printhighlow(arr) {
    var max = arr[0];
    var min = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}

// console.log(printhighlow([15,7,3,-1]));

function printOneRetAnother(arr) {
    console.log(arr[arr.length - 2]);
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return arr[i];
        }
    }
}

// console.log(printOneRetAnother([2, 2, 3, 4, 5]));

function doubleVision(arr) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] * 2;
    }
    return newArr;
}

// console.log(doubleVision([1, 2, 3]));

function countPositives(arr) {
    var counter = 0;
    for (i = 0; i < arr.length; i++) {
        if (i > 0) {
            counter++;
        }
    }
    arr[arr.length - 1] = counter;
    return arr;
}

// console.log(countPositives([-1,1,1,1]));

function evensAndOdds(arr) {
    for (i = 0; i < arr.length - 3; i++) {
        if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
            console.log("Even more so!");
        } else if (
            arr[i] % 2 != 0 &&
            arr[i + 1] % 2 != 0 &&
            arr[i + 2] % 2 != 0
        ) {
            console.log("That's odd!");
        }
    }
}

// evensAndOdds([1, 3, 5, 2, 4, 6, 1, 5, 8, 3, 4, 9, 2, 7, 6, 3, 2, 5]);

function incrementTheSeconds(arr) {
    for (i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i]++;
        }
        console.log(arr[i]);
    }
    return arr;
}

// console.log(incrementTheSeconds([0,1,2,3,4,5,6,7,8]));

function previousLengths(arr) {
    for (i = arr.length - 1; i >= 0; i--) {
        if (i != 0) {
            arr[i] = arr[i - 1].length;
        }
    }
    return arr;
}

// console.log(previousLengths(["hello", "dojo", "awesome"]));

function addSeven(arr) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] + 7;
    }
    return newArr;
}

// console.log(addSeven([1, 2, 3]));

function reverseArray(arr) {
    var temp = 0;
    for (i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = temp;
    }
    return arr;
}

// console.log(reverseArray([1, 2, 3, 4]));
// console.log(reverseArray([1, 2, 3, 4, 5]));

function outlookNegative(arr) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr[i] = arr[i] * -1;
        } else {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}

// console.log(outlookNegative([1,-3,5]));

function alwaysHungry(arr) {
    var counter = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            counter++;
        }
    }
    if (counter == 0) {
        console.log("I'm hungry");
    }
}

// alwaysHungry(['food','grapes','food']);
// alwaysHungry([1,2,3,4,5]);

function swapTowardTheCenter(arr) {
    var temp = 0;
    for (i = 0; i < arr.length / 2; i += 2) {
        temp = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = temp;
    }
    return arr;
}

// console.log(swapTowardTheCenter([1, 2, 3, 4, 5, 6]));
// console.log(swapTowardTheCenter([true,42,"Ada",2,"pizza"]));

function scaleArray(arr, num) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}

// console.log( scaleArray([1,2,3], 3));
