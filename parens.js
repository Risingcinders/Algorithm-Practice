function parval(astring, counter1 = 0, counter2 = 0, counter3 = 0) {
    //() counter1
    //{} counter2
    //[] counter3

    for (var i = 0; i < astring.length; i++) {
        if (astring[i] == "(") {
            counter1++;
            // console.log(i, astring.slice(i),astring.slice(i+1), counter1);
            if (parval(astring.slice(i + 1), counter1, counter2, counter3)) {
                // console.log('win')
            } 
            else {
                // console.log(counter1);
                // console.log("bingo");
                return false;
            }
        } else if (astring[i] == ")") {
            counter1--;
        }
        if (astring[i] == "{") {
            counter2++;
            if (parval(astring.slice(i + 1), counter1, counter2, counter3)) {
                // console.log('win')
            } 
            else {
                // console.log(counter2);
                // console.log("bingo");
                return false;
            }
        } else if (astring[i] == "}") {
            counter2--;
        }
        if (astring[i] == "[") {
            counter3++;
            if (parval(astring.slice(i + 1), counter1, counter2, counter3)) {
                // console.log('win')
            } 
            else {
                // console.log(counter3);
                // console.log("bingo");
                return false;
            }
        } else if (astring[i] == "]") {
            counter3--;
        }
        if (counter1 < 0) {
            console.log("Open left )");
            return false;
        }
        if (counter2 < 0) {
            console.log("Open left }");
            return false;
        }
        if (counter3 < 0) {
            console.log("Open left ]");
            return false;
        }
    }
    console.log(counter1,counter2,counter3)
    return (counter1 == 0 && counter2 == 0 && counter3 == 0);
    // ? true : false

    // if (counter == 0) {
    //     return true;
    // } else {
    //     // console.log("Open right paren")
    //     return false;
    // }
}
// console.log(parval("p)p(3)r)s",2,0,0))
// console.log(parval("Y(3(p)p(3)r)s")); // true
// console.log(parval("N(0)t )0(k")) // false
// console.log(parval("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!")) // true
// console.log(parval("D(i{a}l[ t]o)n{e")) // false
console.log(parval("A(1)s[O (n]0{t) 0}k")) // false
// A(1)s[O (n]0{t) 0}k
