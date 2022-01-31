document.getElementById("player").addEventListener("mouseover", addPoints)

pointers = 0;
time = 60;
need = 30;
function addPoints(){
    pointers++;
    document.getElementById("point").innerHTML = `Puntos: <b> ${pointers}/${need}</b>`
    randNUm = Math.round(Math.random()* 500);
    document.getElementById('player').style.marginTop = randNUm + "px"
    randNUm2 = Math.round(Math.random()* 500);
    document.getElementById('player').style.marginLeft = randNUm + "px"
    if(pointers === 30){
        alert()
    }
}



function resTime(){
    time--;
    document.getElementById('time').innerHTML = `Time: ${time}`;
    if(time === 0){
        alert("perdiste pendejo")
        tiem = 0;
        pointers = 0;
    }
}

setInterval(resTime, 1000);
