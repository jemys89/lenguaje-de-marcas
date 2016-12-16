var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var gasolina=100;

//al cargar por completo la página...
window.onload = function(){

	//encender/apagar el motor al hacer click en la pantalla
	document.onmousedown= function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;

}

	//Empezar a mover nave
	start();


//Definición de funciones
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	v +=a*dt;
	document.getElementById("energiaMarco2").style.height=v+"%";
	y +=v*dt;
	document.getElementById("energiaMarco1").style.height=70-y+"%";
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
		fin();
	}
}
function fin(){
	if (v>5){
		document.getElementById("naveSimple").src="img/naveRota.gif";
		document.getElementById("gameOver").style.display="block";
	} else {
			document.getElementById("winner").style.display="block";	
		}
}
function motorOn(){
	a=-g;
	gasolina --;
	document.getElementById("naveSimple").style.display="none";

	document.getElementById("naveFuego").style.display="block";
	document.getElementById("energiaMarco3").style.height= gasolina + "%";

	if (gasolina <= 0){
		motorOff();
		document.getElementById("energiaMarco3").style.height= 0 +"%";
}
}
function motorOff(){
	a=g;
	
	document.getElementById("naveSimple").style.display="block";
	document.getElementById("naveFuego").style.display="none";
}
function actualizarGasolina(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	gasolina-=1;
	document.getElementById("energiaMarco3").style.height=100+gasolina + "%";	
}
function pausar(){
	stop();
	document.getElementById("naveSimple").style.display="block";
	document.getElementById("pause").style.display="none";
	document.getElementById("play").style.display="block";

}
function reanudar(){
	start();
	document.getElementById("play").style.display="none";
	document.getElementById("pause").style.display="block";
}
function mostrarMenu(){
	pausar();
	document.getElementById("menu").style.display="block";
}
function ocultarMenu() {
    document.getElementById("menu").style.display="none";
}
function mostrarAcerca(){
	pausar();
	document.getElementById("acercaMenu").style.display="block";
}
function ocultarAcerca() {
    document.getElementById("acercaMenu").style.display="none";
}


