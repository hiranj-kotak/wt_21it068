console.log("connected")
let print_prime = function () {
    const N = document.getElementById("id_number").value;
    if (isNaN(N)) {
        document.getElementById("id_number").value = null
        alert("Invalid Input!");
        return;
    }
    let list = []
    let ans = [];
    for (let i = 0; i <= N; i++) {
        list.push(false);
    }
    for (let i = 2; i <= N; i++) {
        if (list[i] == false) {
            ans.push(i);
            let a = i + i;
            while (a <= N) {
                list[a] = true;
                a = a + i;
            }
        }
    }
    document.getElementById("id_print").innerHTML = ans.toString();
}

let but = document.getElementById("id_press");

but.addEventListener("click", print_prime);