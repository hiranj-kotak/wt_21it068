console.log("connected");
function calculateAge() {
    var input = document.getElementById("id_date1").value;
    var input2 = document.getElementById("id_date2").value;
    var date1 = new Date(input);
    var date2 = new Date(input2);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var days = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let te = `${days} Days`
    document.getElementById("diff").innerHTML = te;
}

let obj = document.getElementById("id_calc");
obj.addEventListener("click", calculateAge);