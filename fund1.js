function get_array() {
    var arr = [];
    var i;
    for (i = 1; i < 256; i++) {
        arr.push(i);
    }
    return arr;
}

function sum_even_numbers() {
    var sum = 0;
    var i;
    for (i = 1; i < 1001; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    //your code here
    return sum;
}

function sum_odd_5000() {
    var sum = 0;
    var i;
    for (i = 1; i < 5001; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    //your code here
    return sum;
}

function iterArr(arr) {
    var sum = 0;
    var i;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function findMax(arr) {
    var max = 0;
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findAvg(arr) {
    var sum = 0;
    var i;
    var avg;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / i;
    //your code here
    return avg;
}

function oddNumbers() {
    var arr = [];
    var i;
    for (i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    //your code here
    return arr;
}

function greaterY(arr, Y) {
    var i;
    var count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}

function squareVal(arr) {
    var i;
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }
    return arr;
}

function noNeg(arr) {
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

function maxMinAvg(arr) {
    var i;
    var max = Number.MIN_VALUE; //I have a question about this
    var min = arr[0];
    var avg = 0;
    var arrnew = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        avg += arr[i];
    }
    avg = avg / i;
    arrnew = [max, min, avg];
    return arrnew;
}

console.log(maxMinAvg([1,5,10,-2]))

function swap(arr) {
    var arrnew = [];
    var i;
    for (i = 0; i < arr.length; i++) {
        arrnew.push(arr[i]);
    }

    arrnew[0] = arr[arr.length - 1];
    arrnew[arrnew.length - 1] = arr[0];
    return arrnew;
}

function numToStr(arr) {
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    //your code here
    return arr;
}
