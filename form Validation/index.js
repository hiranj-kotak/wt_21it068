var inp = document.getElementById("id_input");
var btn = document.getElementById("id_button");
btn.addEventListener("click",function(evnt){
    console.log(inp.value)
    if(inp.value == ""){
        document.getElementById("id_text").innerHTML = "enter some value    "
        // alert("please enter a value smaller  than 8");
        evnt.preventDefault();
    }
    if(inp.value.length > 8){
        alert("please enter a value smaller  than 8");
        evnt.preventDefault();
    }

    let ck = document.getElementsByClassName("ck");
    console.log(ck)

    let a = 0;
    for(let i = 0; i < ck.length; i++){
        if(ck[i].checked){
            a++;
        }
    }
    if(a < 2){
        alert("please select at least 2 options");
        evnt.preventDefault();
    }
    
    
})