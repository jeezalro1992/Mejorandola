
var ganar = 0;
var perder = 0;
var empate = 0;
var ganador;

function aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random()*(maximo - minimo + 1)+ minimo);
	return numero;
}



function ejecutar(opcionUsuario)
{


	var opcionSistema = aleatorio(0,4);
	
	/*
	
	

	*/
	var valor = [ [2,3],[0,4],[1,3],[1,4],[0,2]];
	var respuesta = "Perdiste!! jejeje... intentas de nuevo??";
	
	if (opcionUsuario == opcionSistema)
	{
		respuesta = "Empate!! estas mejorando... intentas de nuevo??";
		if(empate>=0){
			empate++;
		}
	}
	else if(valor[opcionUsuario].indexOf(opcionSistema) > -1)
	{
		respuesta = "Ganaste!! ¬¬ no te creas solo te estoy dando esperanza...";
		if(ganar>=0){
			ganar++;
		}

	}
	else{
		if(perder>=0){
			perder++;
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
	
	

	var textc = "Contador";
	var textcr = "Ganaste: "+ ganar+" Perdiste: "+perder+" Empate: "+ empate + "<br> "+ ganador;
	document.getElementById('contador').innerHTML = textc;
	document.getElementById('conta').innerHTML = textcr;
	resultado(opcionUsuario, opcionSistema, respuesta);
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

	