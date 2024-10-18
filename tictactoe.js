var control = true;
var contador =0;
function Chturn(boton){
    boton.disabled = true;
    boton.value = control ? "X": "O";
    document.getElementById("turno").innerHTML = control ? "Turno O": "Turno X";
    control = !control;
    Verificar();
}
function Verificar(){
    if(++contador==9){
        document.getElementById("turno").innerHTML = `EMPATE`;
    }
    var botones = document.querySelectorAll("input[type=button");
    if (botones[0].value == botones[1].value && botones[1].value == botones[2].value && botones[0].value !=""){
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `tr:nth-child(1)::after
        {
            content: "";
            position: absolute;
            top: 48%;
            left: 0%;
            right: 0%;
            height: 10px;
            background-color: black;
            z-index: 1;
            pointer-events: none;
        }`;
        document.head.appendChild(Style);
    }
    else if (botones[3].value == botones[4].value && botones[4].value == botones[5].value &&  botones[3].value !=""){
        document.getElementById("turno").innerHTML =`Gana ${botones[3].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `tr:nth-child(2)::after
        {
            content: "";
            position: absolute;
            top: 48%;
            left: 0%;
            right: 0%;
            height: 10px;
            background-color: black;
            z-index: 1;
            pointer-events: none;
        }`;
        document.head.appendChild(Style);
    }
    else if (botones[6].value == botones[7].value && botones[7].value == botones[8].value &&  botones[6].value !=""){
        document.getElementById("turno").innerHTML =`Gana ${botones[6].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `tr:nth-child(3)::after
        {
            content: "";
            position: absolute;
            top: 48%;
            left: 0%;
            right: 0%;
            height: 10px;
            background-color: black;
            z-index: 1;
            pointer-events: none;
        }`;
        document.head.appendChild(Style);
    }
    else if (botones[0].value == botones[3].value && botones[3].value == botones[6].value &&  botones[0].value !=""){
        document.getElementById("turno").innerHTML =`Gana ${botones[0].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `td:nth-child(1)::after
        {
            content: "";
            position: absolute;
            top: 0%;
            bottom: 0%;
            left: 48%;
            width: 10px;
            background-color: black;
            z-index: 1;
            pointer-events: none;
        }`;
        document.head.appendChild(Style);
    }
    else if (botones[1].value == botones[4].value && botones[4].value == botones[7].value &&  botones[1].value !=""){
        document.getElementById("turno").innerHTML = `Gana ${botones[1].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `td:nth-child(2)::after
        {
            content: "";
            position: absolute;
            top: 0%;
            bottom: 0%;
            left: 48%;
            width: 10px;
            background-color: black;
            z-index: 1;
            pointer-events: none;
        }`;
        document.head.appendChild(Style);
    }
    else if (botones[2].value == botones[5].value && botones[5].value == botones[8].value &&  botones[2].value !=""){
        document.getElementById("turno").innerHTML = `Gana ${botones[2].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `td:nth-child(3)::after
        {
            content: "";
            position: absolute;
            top: 0%;
            bottom: 0%;
            left: 48%;
            width: 10px;
            background-color: black;
            z-index: 1;
            pointer-events: none;
        }`;
        document.head.appendChild(Style);
    }
    else if (botones[0].value == botones[4].value && botones[4].value == botones[8].value &&  botones[0].value !=""){
        document.getElementById("turno").innerHTML =`Gana ${botones[0].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `table::before
        {
            content: "";
            position: absolute;
            top: 0%;
            left: 0%;
            width: calc(100%*1.414);
            height: calc(100%*1.414);
            border-top: 5px solid rgb(0,0,0);
            transform: rotate(45deg);
            transform-origin:top left;
            z-index: 1;
            pointer-events: none;
        }`;
        document.head.appendChild(Style);
    }
    else if (botones[2].value == botones[4].value && botones[4].value == botones[6].value &&  botones[2].value !=""){
        document.getElementById("turno").innerHTML =`Gana ${botones[2].value}`;
        Dall();
        const Style = document.createElement("style");
        Style.textContent = `table::after
        {
            content: "";
            position: absolute;
            top: 100%;
            left: 0%;
            width: calc(100%*1.414);
            height: calc(100%*1.414);
            border-top: 5px solid rgb(0,0,0);
            transform: rotate(-45deg);
            transform-origin:top left;
            z-index: 1;
            pointer-events: none;
        }`;
        document.head.appendChild(Style);
    }
}
function Dall(){
    var botones = document.querySelectorAll("input[type=button]");
    for (let i=0; i<botones.length; i++){
        botones[i].disabled = true;
    }
}