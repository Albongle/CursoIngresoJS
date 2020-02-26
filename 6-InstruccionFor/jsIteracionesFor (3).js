function mostrar()
{

	var repetciones = parseInt(prompt("ingrese el número de repeticiones"));
    while(isNaN(repetciones))
    {
        alert("Verifique el numero Ingresado");
        repetciones = parseInt(prompt("ingrese el número de repeticiones"));
    }

for (cont=0;cont<repetciones;cont++)


	{
	document.write('Hola UTN ' + cont + "</br>");

	
	}


}//FIN DE LA FUNCIÓN