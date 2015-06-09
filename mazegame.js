var character = document.getElementById("bart");
var goingUp = false;
var goingDown = false;
var goingLeft = false;
var goingRight = false;

window.addEventListener("keydown", pressdownkey);
function pressdownkey(evt){
    if(evt.keyCode === 87) { 
        goingUp = true;
    }
    
    if(evt.keyCode === 83) {
        goingDown = true
    }
    if(evt.keyCode === 68) {
        goingRight = true
    }
    if(evt.keyCode === 65) {
        goingLeft = true
    }  
}

window.addEventListener("keyup", releasekey);
function releasekey(evt){
    if(evt.keyCode === 87) { 
        goingUp = false;
    }
    
    if(evt.keyCode === 83) {
        goingDown = false
    }
    if(evt.keyCode === 68) {
        goingRight = false
    }
    if(evt.keyCode === 65) {
        goingLeft = false
    }  
}




javascript:void(0)
function gameLoop(){
    if (goingDown === true) {
        bart.style.top = parseInt(bart.style.top) + 5 + "px";
    }
    if (goingLeft === true) {
        bart.style.left = parseInt(bart.style.left) - 5 + "px";
    }
    if (goingRight === true) {
        bart.style.left = parseInt(bart.style.left) + 5 + "px";
    }
    if (goingUp === true) {
        bart.style.top = parseInt(bart.style.top) - 5 + "px";
    }
    window.requestAnimationFrame(gameLoop);
}
gameLoop();

if(it     )

function iscollding:thing1  


bellow:th1.style.top+th1.hieght<th2.style.top

rightof:th1.style.left th1.width<th.2.style

rightof:th1.style.left>th2.style.left+width


function make walls 






