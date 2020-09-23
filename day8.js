function coinChange(num) {
    var currency = {
        dollars: 100,
        halfdollars: 50,
        quarters: 25,
        dimes: 10,
        nickles: 5,
        pennies: 1,
    };
    var output = {
        dollars: 0,
        halfdollars: 0,
        quarters: 0,
        dimes: 0,
        nickles: 0,
        pennies: 0,
    };

    console.log("Change to make " + num + " is:");
    var count = 0;
    for (key in currency) {
        count = Math.floor(num / currency[key]);
        num = num % currency[key];
        console.log(key + ": " + count);
        output[key] = count;
    }
    return output;
}

coinChange(94);

coinChange(147);

console.log(coinChange(92));
