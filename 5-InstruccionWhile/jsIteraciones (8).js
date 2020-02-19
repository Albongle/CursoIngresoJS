function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
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

	if (num>=0)
	{
		positivo=positivo+num;
	}
	else
	{
		negativo=negativo*num;

	}

	contador++;
	respuesta=prompt("Desea seguir ingresando numeros: ", "si o no");
	while(!(isNaN(respuesta)) || respuesta !="si" && respuesta !="no")
		{
		alert("Verifique la respuesta ingresada");
		respuesta=prompt("Desea seguir ingresando numeros: ", "si o no");;

		}
	}
	while(respuesta =="si" );


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN