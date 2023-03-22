let obj = {
    name: "Kotak Hiranj",
    branch: "IT",
    id: "21IT068",
    sem: '4th',
}
let tbl = document.getElementById("t");
function suit() {
    Object.entries(obj).forEach(([key, value]) => {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML = key;
        tr.appendChild(td);
        tbl.appendChild(tr);
        td = document.createElement('td');
        td.innerHTML = value;
        tr.appendChild(td);
        tbl.appendChild(tr);
    });
}
let btn = document.getElementById('show');
btn.onclick = () => {
    suit()
}