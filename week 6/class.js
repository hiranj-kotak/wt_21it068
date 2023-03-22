console.log("connected");
let table = document.createElement("table");
table.border = "2px";
let Sutudent = class {
    constructor(id, name, gender, sem1, sem2, sem3) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.sem1 = sem1;
        this.sem2 = sem2
        this.sem3 = sem3
    }
    get_cgpa() {
        let se1 = Number(this.sem1);
        let se2 = Number(this.sem2);
        let se3 = Number(this.sem3);
        let d = document.getElementById("id_cgpa");
        let cgpa = (se1 + se2 + se3) / 3;
        let txt = ` ${this.name}'s CGPA is ${cgpa}`;
        console.log(txt);
        d.innerHTML = txt;
    }
}

let thead = function (s1) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (items in s1) {
        let td = document.createElement("th");
        let txt = document.createTextNode(items);
        td.appendChild(txt);
        tr.appendChild(td);
    }
    document.getElementById("id_table").appendChild(table);
}
let clear = function () {
    document.getElementById("id_name").value = null;
    document.getElementById("id_id").value = null;;
    document.getElementById("id_gen").value = null;;
    document.getElementById("id_sem1").value = null;;
    document.getElementById("id_sem2").value = null;;
    document.getElementById("id_sem3").value = null;;
}
let get_data = function () {
    let name = document.getElementById("id_name").value;
    let id = document.getElementById("id_id").value;
    let gender = document.getElementById("id_gen").value;
    let sem1 = document.getElementById("id_sem1").value;
    let sem2 = document.getElementById("id_sem2").value;
    let sem3 = document.getElementById("id_sem3").value;
    let s1 = new Sutudent(name, id, gender, sem1, sem2, sem3);
    console.log(s1);
    return s1;
}
let print_data = function () {
    let s1 = get_data();
    clear();
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (items in s1) {
        let td = document.createElement("td");
        let txt = document.createTextNode(s1[items]);
        td.appendChild(txt);
        tr.appendChild(td);
    }
    document.getElementById("id_table").appendChild(table);
    s1.get_cgpa();
    jsonify(s1);
}

let jsonify = function (s1) {
    let json = JSON.stringify(s1);
    console.log(json);
}
thead(new Sutudent());
document.getElementById("id_submit").addEventListener("click", print_data);