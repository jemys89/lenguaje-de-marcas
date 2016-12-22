var y=5;var v=0;var g=1.622;var a=g;var dt=0.016683;var timer=null;var timerFuel=null;var gasolina=65;var activa=!0;var intentos=0;window.onload=function(){document.onmousedown=function(){if(a==g){motorOn()}else{motorOff()}}
document.onkeydown=motorOn;document.onkeyup=motorOff}
start();function start(){timer=setInterval(function(){moverNave()},dt*1000)}
function stop(){clearInterval(timer)}
function moverNave(){v+=a*dt;document.getElementById("energiaMarco2").style.height=(v*5)+"%";if(v<=5){document.getElementById("energiaMarco2").style.background="darkgreen"}else{document.getElementById("energiaMarco2").style.background="red"}
y+=v*dt;document.getElementById("energiaMarco1").style.height=70-y+"%";if(y<72){document.getElementById("nave").style.top=y+"%"}else{stop();fin()}}
function fin(){if(v>5){document.getElementById("naveSimple").src="img/naveRota.gif";document.getElementById("gameOver").style.display="block";activa=!1}else{document.getElementById("winner").style.display="block"}}
function motorOn(){if(activa==!0){a=-g;if(timerFuel==null)
timerFuel=setInterval(function(){actualizarGasolina()},100);document.getElementById("naveSimple").style.display="none";document.getElementById("naveFuego").style.display="block";document.getElementById("energiaMarco3").style.height=gasolina+"%";if(gasolina<=0){motorOff();document.getElementById("energiaMarco3").style.height=0+"%"}}}
function motorOff(){a=g;clearInterval(timerFuel);timerFuel=null;document.getElementById("naveSimple").style.display="block";document.getElementById("naveFuego").style.display="none"}
function actualizarGasolina(){gasolina-=1;document.getElementById("energiaMarco3").style.height=gasolina+"%";if(gasolina>32.5){document.getElementById("energiaMarco3").style.background="darkgreen"}else{document.getElementById("energiaMarco3").style.background="red"}
if(gasolina<=0){motorOff()}}
function pausar(){stop();motorOff();activa=!1;document.getElementById("naveSimple").style.display="block";document.getElementById("naveFuego").style.display="none";document.getElementById("pause").style.display="none";document.getElementById("play").style.display="block"}
function reanudar(){start();activa=!0;document.getElementById("play").style.display="none";document.getElementById("pause").style.display="block"}
function mostrarMenu(){pausar();document.getElementById("menu").style.display="block"}
function mostrarMenuMovil(){pausar();document.getElementById("menuMovil").style.display="block"}
function ocultarMenu(){document.getElementById("menu").style.display="none"}
function ocultarMenuMovil(){document.getElementById("menuMovil").style.display="none"}
function mostrarAcerca(){pausar();document.getElementById("acercaMenu").style.display="block"}
function ocultarAcerca(){document.getElementById("acercaMenu").style.display="none"}
function reiniciarJuego(){stop();document.getElementById("play").style.display="none";y=5;v=0;g=1.622;a=g;dt=0.016683;gasolina=65;var timer=null;var timerFuel=null;clearInterval(timer);start();intentos ++;activa=!0;document.getElementById("gameOver").style.display="none";document.getElementById("winner").style.display="none";document.getElementById("energiaMarco3").style.height=gasolina+"%";document.getElementById("pause").style.display="block";document.getElementById("naveRota").style.display="none";document.getElementById("naveSimple").src="img/nave-min.png";document.getElementById("intentos1").innerHTML=intentos}
function nivelDificil(){reiniciarJuego();gasolina=30;ocultarMenu();pausar()}
function nivelMedia(){reiniciarJuego();gasolina=45;ocultarMenu();pausar()}
function nivelFacil(){reiniciarJuego();gasolina=65;ocultarMenu();pausar()}
