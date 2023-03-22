// console.log("connected");

function gett() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    let t = `${h} : ${m} : ${s}`;
    return t;
}
function getd() {
    const d = new Date();
    const dat = d.getDate();
    const mon = d.getMonth();
    const yr = d.getFullYear();
    let t = `${dat}/${mon}/${yr}`;
    return t;
}
function showt() {
    let a = document.getElementById("show");
    let t = gett();
    a.innerHTML = t;

    let b = document.getElementById("date");
    t = getd();
    b.innerHTML = t;
}
function hidet() {
    let a = document.getElementById("show");
    let t = "";
    a.innerHTML = t;

    let b = document.getElementById("date");
    t = "";
    b.innerHTML = t;
}



let timerObj = document.getElementById("id_timer");

let myvar;
let timer = function () {
    myvar = setInterval(showt, 1000)
}
timerObj.addEventListener("click", timer);

let hideobj = document.getElementById("id_remover");

let remover = function () {
    clearTimeout(myvar);
    hidet();

}
hideobj.addEventListener("click", remover)