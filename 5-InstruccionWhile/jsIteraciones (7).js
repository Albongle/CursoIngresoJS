function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var num;

	do
	{

	num= parseInt(prompt("Ingrese el numero " + (contador+1) + ": ", "00"));
	while(isNaN(num))
		{
		alert("Verifique el numero ingresado");
		num= parseInt(prompt("Ingrese el numero " + (contador+1) + ": ", "00"));

		}
	acumulador=+acumulador+num;	
	contador++;
	respuesta=prompt("Desea seguir ingresando numeros: ", "si o no");
	while(!(isNaN(respuesta)) || respuesta !="si" && respuesta !="no")
		{
		alert("Verifique la respuesta ingresada");
		respuesta=prompt("Desea seguir ingresando numeros: ", "si o no");;

		}

	}
	while(respuesta =="si" );


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN