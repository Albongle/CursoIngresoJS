/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var inicio=1;
var fin =100;
var numeroSecreto;
var incremento=0;
  

function comenzar()
{
	
	numeroSecreto=Math.floor(Math.random()*((fin+1)-inicio)+inicio); 

}

function verificar()
{
  
  
  var ingresado=parseInt(document.getElementById("numero").value);

  
 if (ingresado==numeroSecreto)
  {
  incremento++;
  document.getElementById("intentos").value= "Usted es un ganador!!! y en solo " +incremento +  " intentos" ;
  }
  else if (ingresado<numeroSecreto)

  {
    incremento++;
  document.getElementById("intentos").value= "falta para llegar, intento " +incremento;
  }
  else
  {
    incremento++;
    document.getElementById("intentos").value= "se paso, intento " + incremento;
  }
  
  
  


  
	
}