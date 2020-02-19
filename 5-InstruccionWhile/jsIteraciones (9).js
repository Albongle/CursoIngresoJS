function mostrar()
{

	
	// declarar variables
	var contador=0;
	var max;
	var min;
	var respuesta;

	do 
	{

	num= parseInt(prompt("Ingrese el numero " + (contador+1) + ": ", "00"));
		while(isNaN(num))
			{
			alert("Verifique el numero ingresado");
			num= parseInt(prompt("Ingrese el numero " + (contador+1) + ": ", "00"));

			}
	if (contador==0)
	{
		max=num;
		min=num;
	}		
	else if (num>max)
	{
		max=num;
	}
	else if (num<min)
	{
		min=num;

	}

	contador++;
	respuesta=prompt("Desea seguir ingresando numeros: ", "si o no");
	while(!(isNaN(respuesta)) || respuesta !="si" && respuesta !="no")
		{
		alert("Verifique la respuesta ingresada");
		respuesta=prompt("Desea seguir ingresando numeros: ", "si o no");;

		}
	}
	while(respuesta !="no" );

	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;


}//FIN DE LA FUNCIÓN