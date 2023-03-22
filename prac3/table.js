console.log("connected");
function table() {
    var rows = document.getElementById("id_number").value;
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    var row, cell, text;

    for (var i = 1; i <= rows; i++) {
        row = document.createElement("tr");

        for (var j = 1; j <= rows; j++) {
            cell = document.createElement("td");
            text = document.createTextNode(i * j);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.getElementById("table").appendChild(table);
}


let button = document.getElementById("id_press");

button.addEventListener("click", table);