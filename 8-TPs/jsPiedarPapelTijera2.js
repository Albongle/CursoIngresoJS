var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var inicio=1;
var fin =3;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
		 	
	
   


}//FIN DE LA FUNCIÓN
function piedra()
{

	eleccionMaquina=Math.floor(Math.random()*((fin+1)-inicio)+inicio); 
    switch(eleccionMaquina)
    {
        case 1: 
        {
			alert("Empato");
			ContadorDeEmpates++;
            break;
        }
        case 2: 
        {
			alert("Perdio");
			ContadorDePerdidas++;
            break;
        }
        default:
        {
			alert("Gano");
			ContadorDeGanadas++;
            break;

        }
    }
    
	mostrarResultado()
}//FIN DE LA FUNCIÓN
function papel()
{
	eleccionMaquina=Math.floor(Math.random()*((fin+1)-inicio)+inicio); 

    switch(eleccionMaquina)
    {
        case 1: 
        {
			alert("Gano");
			ContadorDeGanadas++;
            break;
        }
        case 2: 
        {
			alert("Empato");
			ContadorDeEmpates++;
            break;
        }
        default:
        {
			alert("Perdio");
			ContadorDePerdidas++;
            break;

        }
    }

	mostrarResultado()
}
//FIN DE LA FUNCIÓN
function tijera()
{

	eleccionMaquina=Math.floor(Math.random()*((fin+1)-inicio)+inicio); 
	switch(eleccionMaquina)
    {
        case 1: 
        {
			alert("Perdio");
			ContadorDePerdidas++;
            break;
        }
        case 2: 
        {
			alert("Gano");
			ContadorDeGanadas++;
            break;
        }
        default:
        {
			alert("Empato");
			ContadorDeEmpates++;
            break;

		}
		

    }
	mostrarResultado()
}	

function mostrarResultado()
{
	document.getElementById("ganadas").value="Juegos ganados: " + ContadorDeGanadas;
	document.getElementById("empatadas").value="Juegos empatados: " + ContadorDeEmpates;
	document.getElementById("perdidas").value="Juegos perdidos: " + ContadorDePerdidas;
}//FIN DE LA FUNCIÓN
