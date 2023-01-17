const colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

let getc = function () {
    var color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
}

setInterval(getc, 1000);