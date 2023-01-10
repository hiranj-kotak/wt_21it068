function converter() {
    let obj = document.getElementById("temp_input")
    let temp = obj.value;
    if (isNaN(temp)) {
        obj.value = "";
        alert("Invalid Input")
    }
    let f;
    f = (temp * 1.8) + 32;
    let ll = document.createElement("li");
    let t = `${temp} in farhenite is ${f}`
    let text = document.createTextNode(t);
    ll.appendChild(text);
    document.getElementById("id_text").appendChild(ll);

}