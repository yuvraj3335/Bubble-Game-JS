var timer = 6;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.getElementById('scoreval').textContent = score;
}
function getNewHit(){
     hitrn = Math.floor(Math.random()*10);
    document.getElementById('hitval').textContent = hitrn;
}

function makeBubble(){

    var clutter = "";
for(var i=1 ; i<=168; i++){
    var x = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${x}</div>`;
}
document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer(){
   var timerInt =  setInterval(function(){
        if(timer>0){
            timer--;
            document.getElementById('timerval').innerHTML = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector('.pbtm').innerHTML =     `<h1> Game Over </h1>`
        }
        },1000)
}

document.querySelector(".pbtm").addEventListener("click",function(dets){
var clickedNum = Number(dets.target.textContent);
if (clickedNum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();

}
});
runTimer();
makeBubble();
getNewHit();


