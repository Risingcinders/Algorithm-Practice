function pVal (parVal) {
    var countPar = 0;
    var countCur = 0;
    var countSqu = 0;

    for(var i = 0; i < parVal.length; i++) {
        if(parVal[i] == "(") {
            countPar++;
        }
        else if(parVal[i] == ")") {
            countPar--;
        }
        if (parVal[i] == "{") {
            countCur++;
        }
        else if(parVal[i] == "}") {
            countCur--;
        }
        if(parVal[i] == "[") {
            countSqu++;
        }
        else if(parVal[i] == "]") {
            countSqu--;
        }
        if(countPar < 0) {
            return(false);
        }
        if(countCur < 0) {
            return(false);
        }
        if(countSqu < 0) {
            return(false);
        }
    }
        if(countPar != 0) {
            return(false);
        }
        if(countCur != 0) {
            return(false);
        }
        if(countSqu != 0) {
            return(false);
        }
        else if(countPar == 0) {
            return(true);
        }
        else if(countCur == 0) {
            return(true);
        }
        else if(countSqu == 0) {
            return(true);
        }
}
console.log(pVal("Y(3(p)p(3)r)s")) // true
console.log(pVal("N(0)t )0(k")) // false
console.log(pVal("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!")) // true
console.log(pVal("D(i{a}l[ t]o)n{e")) // false
console.log(pVal("A(1)s[O (n]0{t) 0}k")) // false