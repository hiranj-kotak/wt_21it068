console.log("connected  ")

var img = document.getElementById("id_gojo");


let move = function (e) {
    let key = e.keyCode;
    console.log(key);
    if (key == 39) {
        let inc = parseInt(img.style.left, 10) + 10;
        console.log(inc);
        img.style.left = `${inc}px`;
    }
    if (key == 37) {
        let inc = parseInt(img.style.left, 10) - 10;
        console.log(inc);
        img.style.left = `${inc}px`;
    }
    if (key == 40) {
        let inc = parseInt(img.style.top, 10) + 10;
        console.log(inc);
        img.style.top = `${inc}px`;
    }
    if (key == 38) {
        let inc = parseInt(img.style.top, 10) - 10;
        console.log(inc);
        img.style.top = `${inc}px`;
    }
    console.log(img)
}

document.addEventListener("keydown", move);



