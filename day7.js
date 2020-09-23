function pushyfront(arr, num) {
    for (i = arr.length; i >= 0; i--) {
        if (i == 0) {
            arr[i] = num;
            return arr;
        }
        arr[i] = arr[i - 1];
        // console.log(arr);
    }
}

// console.log(pushyfront([2, 3, 4, 5, 6], 1));

function popyFront(arr) {
    var num = 0;
    num = arr[0];
    for (i = 0; i <= arr.length; i++) {
        if (i == arr.length - 1) {
            arr.pop();
            return { arr, num };
        }
        arr[i] = arr[i + 1];
        // console.log(arr);
    }
}

// console.log(popyFront([1, 2, 3, 4, 5, 6]));

// console.log(popyFront(pushyfront([5, 4, 3, 2, 1], 0)));

// Array: Remove At
// Given array and an index into array, remove and
// return the array value at that index. Do this
// without using built-in array methods except
// pop(). Think of popFront(arr) as equivalent
// to removeAt(arr,0).

function removeAt(arr, ind) {
    var num = 0;
    num = arr[ind];
    for (i = ind; i <= arr.length; i++) {
        if (i == arr.length - 1) {
            arr.pop();
            return { arr, num };
        }
        arr[i] = arr[i + 1];
        // console.log(arr);
    }
}

// console.log(removeAt([1, 2, 3, 4, 5, 6], 2));

function insertAt(arr, ind, num) {
    for (i = arr.length; i >= ind; i--) {
        if (i == ind) {
            arr[i] = num;
            return arr;
        }
        arr[i] = arr[i - 1];
        // console.log(arr);
    }
}

// console.log(insertAt([2, 3, 4, 5, 6], 2, 7));

function swapPairs(arr) {
    var temp = 0;
    if (arr.length % 2 == 0) {
        console.log("Even length");
    }
    for (i = 1; i < arr.length; i += 2) {
        temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }
    return arr;
}

// console.log(swapPairs([1, 2, 3, 4, 5, 6, 7]));

// function removeDuplicates(arr) {
//     var num = 0;
//     for (i = 1; i <= (arr.length-num) ; i++) {
//         if (arr[i + num] == arr[i - 1]) {
//             num++;
//         }
//         arr[i] = arr[i + num];
//         console.log(arr);
//     }
//     for (j = 0; j < num; j++) {
//         arr.pop();
//     }
//     return arr;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 5, 6]));


// function removeDuplicates2(arr) {
//     var num = arr[arr.length-1];
//     var counter = 0;
//     for (i = arr.length-1; i > 0 ; i--) {
//         if (arr[i-1] == arr[i]) {
//             counter++
//             arr[i] = num;
//         }
//         arr[i] = arr[i + num];
//         console.log(arr);
//     }
//     for (j = 0; j < counter; j++) {
//         arr.pop();
//     }
//     return arr;
// }

// console.log(removeDuplicates2([1, 2, 2, 3, 4, 5, 5, 5, 6]));
