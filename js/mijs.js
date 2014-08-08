
var ganar = 0;
var perder = 0;
var empate = 0;
var ganador;
var pasesU = 10;
var pasesS =10;

function aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random()*(maximo - minimo + 1)+ minimo);
	return numero;
}



function ejecutar(opcionUsuario)
{
if ( pasesS > 0 && pasesU > 0)
{

	var opcionSistema = aleatorio(0,4);
	var valor = [ [2,3],[0,4],[1,3],[1,4],[0,2]];
	var respuesta = "Perdiste!! jejeje... intentas de nuevo??";
	
	if (opcionUsuario == opcionSistema)
	{
		respuesta = "Empate!! estas mejorando... intentas de nuevo??";
		if(empate>=0){
			empate++;
			pasesS--;
			pasesU--;
		}
	}
	else if(valor[opcionUsuario].indexOf(opcionSistema) >=0)
	{
		respuesta = "Ganaste!! ¬¬ no te creas solo te estoy dando esperanza...";
		if(ganar>=0){
			ganar++;
			pasesS--;
		}

	}
	else{
		if(perder>=0){
			perder++;
			pasesU--;
		}
	}

var contador= ganar-perder;
	if(contador==0){
		ganador="Empatados!! esto esta reñido";

	}else if(contador>0){
		ganador="Vas ganando!! No por mucho... ¬¬";
	}else{
		ganador = "JavaScript Gana!! Quien manda ahora?";
	}
	
	
	var oport ="Tus oportunidades: "+ pasesU +"<br> Oportinidades JavaScript: "+ pasesS;
	var textc = "Contador";
	var textcr = "Ganaste: "+ ganar+" Perdiste: "+perder+" Empate: "+ empate + "<br> "+ ganador;
	document.getElementById('oportunidades').innerHTML=oport;
	document.getElementById('contador').innerHTML = textc;
	document.getElementById('conta').innerHTML = textcr;
	resultado(opcionUsuario, opcionSistema, respuesta);
}

if(pasesS==0 ){
	
	document.getElementById('ganaste').style.display="block";
}
else if(pasesU==0){
	
	document.getElementById('perdiste').style.display="block";
}
if (pasesS==0 && pasesU == 0){
	document.getElementById('empatados').style.display="block";
}
}

 
function resultado(opcionUsuario, opcionSistema, respuesta)
{

	var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
	var usuario = opciones[opcionUsuario];
	var sitema = opciones[opcionSistema];
	var src = 'img/'+ sitema +'.png';
	var textr = "Resultado";
	var text = '<p>'+usuario+' VS '+sitema+'</p>' +'<img src="img/'+usuario+'.png"/>'+'<span>vs</span>'+'<img src="img/'+sitema+'.png" /><br>'+respuesta;

	document.getElementById('text').innerHTML = " ";
	document.getElementById('resultadop').innerHTML = textr;
	document.getElementById('resultado').innerHTML = text;
}

	
