"use strict";
console.log("CONNECTED")
function myfunc() {
    console.log("pressed")
    let inpObj = document.getElementById("id_inp")
    let inpVal = inpObj.value
    inpObj.value = ""
    if (inpVal == "") {
        alert("Enter some value")
    }
    else {
        const node = document.createElement("li")
        const txt = document.createTextNode(inpVal)
        node.appendChild(txt)
        let c = document.getElementById("id_list").firstChild
        if (c == " ") {
            document.getElementById("id_list").first = node;
        }
        else {
            document.getElementById("id_list").appendChild(node)
        }
        console.log(c)
    }
}
function sorting() {
    let obj = document.getElementById("sort").value
    console.log(obj)
    if (obj = "asc") {

    }
    else if (obj = "des") {

    }
}