let p = document.getElementById("p");
function r() {
    p.innerHTML = `handle by onclick in html`
}
let btn1 = document.getElementById("addevent")
let btn2 = document.getElementById("ocd")
btn1.onclick = () => {
    p.innerHTML = `handle with add event listner in js`
}
btn2.onclick = function () {
    p.innerHTML = `handle by with DOM Onclick property in js`
}