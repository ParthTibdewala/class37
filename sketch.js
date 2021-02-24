var allPlayers 
var database
var gameStateV=0,playerCountV
var form,player,game
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game=new Game()
    game.getState();
    game.start()

    
   
}

function draw(){
    background("white");
    if(playerCountV===4){
        game.update(1)
    }
    if(gameStateV===1){
    clear();
    game.play();
    }
   

    
}

