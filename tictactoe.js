var spot0 = document.getElementById("spot0");
spot0.addEventListener("click", runGame);
var spot1 =  document.getElementById("spot1");
spot1.addEventListener("click", runGame);
var spot2 = document.getElementById("spot2");
spot2.addEventListener("click", runGame);
var spot3 = document.getElementById("spot3");
spot3.addEventListener("click", runGame);
var spot4 = document.getElementById("spot4");
spot4.addEventListener("click", runGame);
var spot5 = document.getElementById("spot5");
spot5.addEventListener("click", runGame);
var spot6 = document.getElementById("spot6");
spot6.addEventListener("click", runGame);
var spot7 = document.getElementById("spot7");
spot7.addEventListener("click", runGame);
var spot8 = document.getElementById("spot8");
spot8.addEventListener("click", runGame);

       

	var isXturn = true; //boolean to check if it's x's turn
 function runGame() {
    // add mark.  Adds Xs and Os
    
    
    if(isXturn === true){
        this.innerHTML = "X";
    }
    else{
        this.innerHTML = "O";
    }
    
    //
    if(isXturn){
        isXturn = false;
    }
    else{
          isXturn = true;
    }
    
   
    
    // Check for win.  Will check to\





}