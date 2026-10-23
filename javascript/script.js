
// 1. نختار جميع العناصر التي تملك نفس الكلاس
let boxes = document.querySelectorAll(".box");
let area = document.querySelector(".game-area");
let xResult = document.querySelector(".result-game-x");
let theGame = document.querySelector(".the-game");
let oResult = document.querySelector(".result-game-o");
let displayGame = document.querySelector(".display-game");
let displayResult = document.querySelector(".display-result");
let btnPlay = document.querySelector(".btn-play");
let h1Result = document.querySelector(".h1-result");
let btnTry = document.querySelector(".try");
let player = "X";
let x=0;
let o=0;






// 2. نمر على كل عنصر ونضيف له حدث النقر (Click)


function StartGame(){
    for(let i=0; i<9;i++){
        boxes[i].onclick= function (e){ 
            window.document.title = "Hello JS";

            
    if(boxes[i].textContent === ""){
        boxes[i].textContent = player;  
        check();
        if(player==="X"){
            player = "O";
            turnPlayer.textContent = `turn ${player}`;
        } else if(player==="O"){
            player = "X";
            turnPlayer.textContent = `turn ${player}`;
        }
    } else {
        console.log("you can't");
    }
}

}

console.log(area.children.length);

let turnPlayer = document.querySelector(".player");

}
function check(){
    
    
    if(area.children[0].textContent=== player && area.children[1].textContent=== player && area.children[2].textContent=== player){
        console.log(`player: ${player}  Win`);
        if(player=="X"){
            x++;
            xResult.textContent =  `X: ${x}`;
        }
        else if(player=="O"){
            o++;
            oResult.textContent = `O: ${o}`;
        }

        result(true);        
        
    }
    else if(area.children[3].textContent=== player && area.children[4].textContent=== player && area.children[5].textContent=== player){
        console.log(`player: ${player}  Win`);
        if(player=="X"){
            x++;
            xResult.textContent =  `X: ${x}`;
        }
        else if(player=="O"){
            o++;
            oResult.textContent = `O: ${o}`;
        }
        result(true);        
        
    }
    else if(area.children[6].textContent=== player && area.children[7].textContent=== player && area.children[8].textContent=== player){
        console.log(`player: ${player}  Win`);
        if(player=="X"){
            x++;
            xResult.textContent =  `X: ${x}`;
        }
        else if(player=="O"){
            o++;
            oResult.textContent = `O: ${o}`;
        }
    
        result(true);        
        
    }
    else if(area.children[0].textContent=== player && area.children[3].textContent=== player && area.children[6].textContent=== player){
        console.log(`player: ${player}  Win`);
        if(player=="X"){
            x++;
            xResult.textContent =  `X: ${x}`;
        }
        else if(player=="O"){
            o++;
            oResult.textContent = `O: ${o}`;
        }
        result(true);        
        
    }
    else  if(area.children[1].textContent=== player && area.children[4].textContent=== player && area.children[7].textContent=== player){
        console.log(`player: ${player}  Win`);
        if(player=="X"){
            x++;
            xResult.textContent =  `X: ${x}`;
        }
        else if(player=="O"){
            o++;
            oResult.textContent = `O: ${o}`;
        }

        result(true);        
        
    }
    else if(area.children[2].textContent=== player && area.children[5].textContent=== player && area.children[8].textContent=== player){
        console.log(`player: ${player}  Win`);
        if(player=="X"){
            x++;
            xResult.textContent =  `X: ${x}`;
        }
        else if(player=="O"){
            o++;
            oResult.textContent = `O: ${o}`;
        }
        result(true);        
        
    }
    else if(area.children[0].textContent=== player && area.children[4].textContent=== player && area.children[8].textContent=== player){
        console.log(`player: ${player}  Win`);
        if(player=="X"){
            x++;
            xResult.textContent =  `X: ${x}`;
        }
        else if(player=="O"){
            o++;
            oResult.textContent = `O: ${o}`;
        }
        result(true);        
        
    }
    else   if(area.children[2].textContent=== player && area.children[4].textContent=== player && area.children[6].textContent=== player){
        console.log(`player: ${player}  Win`);
        if(player=="X"){
            x++;
            xResult.textContent =  `X: ${x}`;
        }
        else if(player=="O"){
            o++;
            oResult.textContent = `O: ${o}`;
        }
        
        result(true);        
    }
}







function againGame(){
    for(let i=0; i<area.children.length;i++){
        area.children[i].textContent = "";
    }
}


function Start(onOff){
    displayResult.style.display = "none";
    
    if(onOff===true){
        StartGame();
        
        theGame.style.filter = "blur(10px)";
        displayGame.style.display = "flex";
    } else if(onOff===false){
        displayGame.style.display = "none";
        theGame.style.filter = "none";
    }
    
}
function result(onOff){
    displayGame.style.display = "none";

    if(onOff===true){
        
        h1Result.textContent = `Player: ${player} is Win`;
        theGame.style.filter = "blur(10px)";
        displayResult.style.display = "flex";
    } else if(onOff===false){
        displayResult.style.display = "none";
        theGame.style.filter = "none";
    }
    
};





Start(true);
btnPlay.onclick = function() {
    Start(false);
};

btnTry.onclick = function(){
    result(false);
    againGame();
};























