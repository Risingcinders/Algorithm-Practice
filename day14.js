// Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of a cappella fugues. 
// Some of ‘those fuguing challenges’ are less popular than others, so he needs an index. 
// Given a sorted array of pages where a term appears, produce an index string. Consecutive pages should form ranges separated by a hyphen. 
// For [1,13,14,15,37,38,70], return string "1, 13-15, 37-38, 70". Take care to get all the commas and spaces correct: 
// Martin is palpably particular (practically persnickety!) about patchy punctuation.

function bookindex(aarray) {
    var counter = 0
    var astring = String(aarray[0]) 
    for (var i = 1; i< aarray.length;i++) {
        while (aarray[i] == aarray[i-1]+1) {
            counter++
            i++
        }
        if (counter>0) {
            astring += '-'
            astring += aarray[i-1]
        }
        astring += ','
        astring += aarray[i]
        counter = 0
    }
    return(astring)
}

console.log(bookindex([1,2,3,5,6,9,11]))
console.log(bookindex([1,13,14,15,37,38,70]))


