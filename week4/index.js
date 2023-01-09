// console.log("connected")

let table = document.getElementById("id_details");
let audiObj = {
    name: " Audi TT",
    Type: "2 seater sports",
    price: " 58 Lakhs"
}
let benzObj = {
    name: "Mercedes Benz Q7",
    Type: "sedan",
    price: " 58 Lakhs"
}
let balenoObj = {
    name: "Suzuki Baleno",
    Type: "Hachback",
    price: " 58 Lakhs"
}

function create_head(table, obj) {
    let thead = table.createTHead();
    thead.insertRow();
    for (let key in obj) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);

    }
}
function data(table, obj) {
    let row = table.insertRow();
    for (let key in obj) {
        let cell = row.insertCell();
        let text = document.createTextNode(obj[key]);
        cell.appendChild(text);
    }
}
function audi() {
    create_head(table, audiObj);
    data(table, audiObj);
}
function benz() {
    let name = benzObj.name;
    let type = benzObj.Type;
    let price = benzObj.price;
    let table_data = `<tr> <th> name</th> <th> Type </th> <th> price</th> </tr> <tr> <td> ${name}</td>  <td> ${type}</td> <td> ${price}</td></tr>`
    document.getElementById("id_details").innerHTML = table_data;
}
function baleno() {
    let name = balenoObj.name;
    let type = balenoObj.Type;
    let price = balenoObj.price;
    let table_data = `<tr> <th> name</th> <th> Type </th> <th> price</th> </tr> <tr> <td> ${name}</td>  <td> ${type}</td> <td> ${price}</td></tr>`
    document.getElementById("id_details").innerHTML = table_data;
}
