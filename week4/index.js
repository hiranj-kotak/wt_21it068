// console.log("connected")

let table = document.getElementById("id_car");
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
