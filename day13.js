function isPalin(astring) {
    console.log(astring)
    for (i = 0; i < astring.length / 2; i++)
        if (astring[i] != astring[astring.length - (i + 1)]) {
            return false;
        }
    
    return true
}

console.log(isPalin("racecar"));
console.log(isPalin("peanut"));


