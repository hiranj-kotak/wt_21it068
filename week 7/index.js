console.log("Hello World");


let mult = () => {
    let a = Number(document.getElementById("input1").value)
    let b =Number( document.getElementById("input2").value)
    alert(a*b)
}


document.getElementById("id_multiply").addEventListener("click", mult);