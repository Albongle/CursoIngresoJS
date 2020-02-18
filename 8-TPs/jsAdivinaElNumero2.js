/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var inicio=1;
var fin =100;
var numeroSecreto;
var incremento=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	numeroSecreto=Math.floor(Math.random()*((fin+1)-inicio)+inicio); 

}

function verificar()
{
	var ingresado=parseInt(document.getElementById("numero").value);

	incremento++;
 if (ingresado==numeroSecreto)
  {
	switch(incremento)
	{
		case 1:
			{

				document.getElementById("intentos").value= "usted es un Psíquico en solo " +incremento +  " intentos" ;
				break;
			}
		case 2:
			{

				document.getElementById("intentos").value= "excelente percepción " +incremento +  " intentos" ;
				break;
			}
		case 3:
			{

				document.getElementById("intentos").value= "Esto es suerte " +incremento +  " intentos" ;
				break;
			}

		case 4:
			{

				document.getElementById("intentos").value= "Excelente técnica " +incremento +  " intentos" ;
				break;
			}

		case 5:
			{

				document.getElementById("intentos").value= "usted está en la media " +incremento +  " intentos" ;
				break;
			}
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			{

				document.getElementById("intentos").value= "Falta técnica " +incremento +  " intentos" ;
				break;
			}
		default:
			{
				document.getElementById("intentos").value= "afortunado en el amor!! " +incremento +  " intentos" ;
				break;

			}





	}

  }
  else if(ingresado<numeroSecreto)
  {
    
  document.getElementById("intentos").value= "falta para llegar, intento " +incremento;
  }
  else
  {
   
    document.getElementById("intentos").value= "se paso, intento " + incremento;
  }
  
  
	

}