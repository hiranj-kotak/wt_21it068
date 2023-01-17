console.log("conn")
let img = document.getElementById("id_gojo")
console.log(img)
let zoomIn = function () {
    img.style.height = "50vh";
    img.style.width = "50vh";
}

let zoomOut = function () {
    img.style.height = "5vh";
    img.style.width = "5vh";
}
img.addEventListener("mouseover", zoomIn);
img.addEventListener("mouseleave", zoomOut);


