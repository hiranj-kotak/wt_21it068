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
    let ll = document.createElement("li");
    let t = `${val1.value} ${x} ${val2.value}  =  ${ans}`;
    let text = document.createTextNode(t);
    ll.appendChild(text);;
    document.getElementById("ans").appendChild(ll);
}