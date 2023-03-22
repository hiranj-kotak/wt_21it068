let reverseString = function () {
    let textObj = document.getElementById("id_number")
    let text = textObj.value;
    // textObj.value = null;
    let rev = text.split('').reverse().join('');
    document.getElementById("id_print").innerHTML = rev;

}

let button = document.getElementById("id_press");
button.addEventListener("click", reverseString);


