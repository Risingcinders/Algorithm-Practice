function revstring(forwardstring) {
    var temp = "";
    for (i = forwardstring.length - 1; i >= 0; i--) {
        temp += forwardstring[i];
    }
    return temp;
}

console.log(revstring("candy"));
