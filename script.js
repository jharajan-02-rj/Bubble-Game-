var timer = 6;
var score = 0;
var hhitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
var rn =  Math.floor(Math.random()*10);
 document.querySelector("#hitval").textContent = rn;
}

function makebubble(){ 
var culter = "";

for (var i = 1; i <= 70; i++){
    var rn = Math.floor(Math.random()*10)
    culter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML= culter;
}

function runTimer(){
   var timerint= setInterval(function(){
    if (timer > 0){

    
    timer--;
    document.querySelector("#timerval").textContent = timer;
} else { 
    clearInterval(timerint);
    document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
}
    },1000);
}

 document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum==hhitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }
 });

runTimer();
makebubble();
getNewHit();
increaseScore();