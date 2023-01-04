function f1(x) {
    var val1 = document.getElementById("v1");
    var val2 = document.getElementById("v2");
    var ans;
    switch (x) {
        case '+':
            ans = parseInt(val1.value) + parseInt(val2.value)
            break;
        case '-':
            ans = parseInt(val1.value) - parseInt(val2.value)
            break;
        case '*':
            ans = parseInt(val1.value) * parseInt(val2.value)
            break;
        case '/':
            ans = parseInt(val1.value) / parseInt(val2.value)
            break;
    }
    var v = document.getElementById("ans")
    v.innerHTML = "Ans is " + ans
}