console.log("connected");
function calculateAge() {
    var input = document.getElementById("id_number").value;
    var birthdate = new Date(input);
    var today = new Date();
    var ageInMilliseconds = today - birthdate;
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
    var ageInMonths = ageInDays / 30.4;
    var ageInYears = ageInMonths / 12;

    var years = Math.floor(ageInYears);
    var months = Math.floor(ageInMonths % 12);
    var days = Math.floor(ageInDays % 30.4);

    let te = `${years}Yrs,${months} Months,${days} Days`
    document.getElementById("age").innerHTML = te;
}

let obj = document.getElementById("id_press");
obj.addEventListener("click", calculateAge);