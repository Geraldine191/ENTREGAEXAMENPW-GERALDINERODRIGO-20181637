const button_btn = document.querySelectorAll(".button");
const info = document.getElementById("game-info");
const game_btn = document.getElementById("game-boton")
var i = 1;
const jBtn_e =  "pointer-events:initial;opacity:initial;",
      jBtn_d =  "pointer-events:none;opacity:40%;";

var pWin = [ [0,1,2],[3,4,5],[6,7,8],
             [0,3,6],[1,4,7],[2,5,8],
             [0,4,8],[2,4,6]
           ];
//Implementar la funcionalidad desde Javascript que permita poner una letra “X” o una letra “O” al hacer
//click en uno de los botones y según el jugador que toca jugar.
function comprobar(){  //el juego debe de verificar si hay un ganador (4 puntos). En caso de
    //haber un ganador o empate:
  game_btn.style.cssText = jBtn_d;
  for (var j = 0; j < pWin.length;j++){
    if(button_btn[pWin[j][0]].innerHTML === "X" && button_btn[pWin[j][1]].innerHTML === "X" && button_btn[pWin[j][2]].innerHTML === "X" ){
      info.innerHTML = '"JUGADOR X" GANO';
      deshabilitarCasillas();
    }else if(button_btn[pWin[j][0]].innerHTML === "O" && button_btn[pWin[j][1]].innerHTML === "O" && button_btn[pWin[j][2]].innerHTML === "O"){
      info.innerHTML = '"JUGADOR O" GANO';
      deshabilitarCasillas();
    }else if(button_btn[0].innerHTML != "" && button_btn[1].innerHTML != "" && button_btn[2].innerHTML != "" && button_btn[3].innerHTML !== "" && button_btn[4].innerHTML != "" && button_btn[5].innerHTML != "" && button_btn[6].innerHTML != "" && button_btn[7].innerHTML != "" && button_btn[8].innerHTML != ""){
      info.innerHTML = "Empate";
      deshabilitarCasillas(false);
    }
  }
    
}

function  deshabilitarCasillas(y){
  (y == false)?i = Math.floor(Math.random() * (3 - 1)) + 1:0;
    for(var n_boton = 0; n_boton < button_btn.length; n_boton++){    
      button_btn[n_boton].style.setProperty("pointer-events","none"); 
    } 
  game_btn.style.cssText = jBtn_e;
}

function nEmpieza(){
  game_btn.style.cssText = jBtn_d;
  let c1;
  (i % 2 == 0 )?c1= "X":c1= "O"; 
  info.innerHTML = `PRESIONA UN BOTON PARA INICIAR: <b>"${c1}"</b> EMPEZAR.`;   
}

button_btn.forEach(boton => {
  boton.onclick = function(){
    info.innerHTML = "";
    (i % 2 == 0)?boton.innerHTML = "X": boton.innerHTML = "O";
    comprobar();
    boton.style.setProperty("pointer-events","none"); 
    i++; 
    (i == 3)?i = 1: 0 ;
  }
});

game_btn.onclick = function(){
  for(var n_boton = 0; n_boton < button_btn.length; n_boton++){    
    button_btn[n_boton].style.cssText = "pointer-events:initial;";
    button_btn[n_boton].innerHTML = "";
  }
  nEmpieza();
}

nEmpieza();
