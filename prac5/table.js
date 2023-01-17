const colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
let t = document.getElementsByTagName("tr");
for (let i = 0; i < t.length; i++) {
    t[i].style.backgroundColor = colors[i];
}