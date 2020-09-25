// Array: Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new
// array containing the first array’s elements, followed by the second array’s elements. Do not alter the
// original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

// Extra challenge: Can you make a function that does something similar, but alternates the items? So:
// [2,4,6] and [1,2,3] would be:
// [2,1,4,2,6,3]

function conKitty(arr, arr2) {
    for (i = 0; i < arr2.length; i++) {
        arr.push(arr2[i]);
    }
    return arr;
}

// console.log(conKitty([1, 2, 3], ["a", "b", "c"]));

function conKitty2(arr, arr2) {
    var newArr = [];
    if (arr.length >= arr2.length) {
        longArr = arr;
        shortArr = arr2;
    } else {
        longArr = arr2;
        shortArr = arr;
    }
    for (i = 0; i < longArr.length; i++) {
        console.log(newArr);
        if (i >= shortArr.length) {
            newArr[i + 2 * (shortArr.length - 1) - 1] = longArr[i];
        } else {
            newArr[i * 2] = longArr[i];
        }
    }
    for (j = 0; j < shortArr.length; j++) {
        newArr[j * 2 + 1] = shortArr[j];
    }
    return newArr;
}

// console.log(conKitty2([1, 2, 3, 4,5,6], ["a", "b", "c"]));

function conKitty3(arr, arr2) {
    var newArr = [];
    if (arr.length >= arr2.length) {
        longArr = arr;
        shortArr = arr2;
    } else {
        longArr = arr2;
        shortArr = arr;
    }
    for (i = 0; i < longArr.length; i++) {
        newArr.push(longArr[i]);
        if (i < shortArr.length) {
            newArr.push(shortArr[i]);
        }
    }
    return newArr;
}

console.log(conKitty3([1, 2, 3, 4, 5, 6], ["a", "b", "c"]));
