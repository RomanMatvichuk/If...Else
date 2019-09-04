var age = 0;
var inputText = "";
var result = "";
var btn = document.getElementById("btn");
var result = document.getElementById("result");

btn.onclick = function() {
    age = Number(document.getElementById("age").value);
    inputText = document.getElementById("age").value;

    if (isNaN(age)) {
        result.innerText = "Du kan inte mata in bokstäver!";        
    }
    else if(age > 0 && age < 19){
        result.innerText = "Du är för ung!";
    }
    else if(age > 65 && age < 121){
        result.innerText = "Du är för gammal!";
    }
    else if(age > 18 && age < 66){
        result.innerText = "Precis rätt!";
    }
    else if(age > 120){
        result.innerText = "Svårt att tro på detta!";
    }
    else if(inputText === ""){
        result.innerText = "Inget värde!";
    }
    else{
        result.innerText = "Du kan mata in bara siffror från 1 och uppåt";
    }
}

