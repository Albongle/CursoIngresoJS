function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num;

	while(respuesta =="si" )
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
	}
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN