function mostrar()
{
	var contador=0;
	var sumNeg=0;
	var sumPos=0;
	var qPos=0;
	var qNeg=0;
	var qCeros=0;
	var respuesta;
	var resto;
	var qPar=0;
	var qImpar=0;
	var promNeg;
	var promPos;
	var difPosNeg;


	do 
	{

	num= parseInt(prompt("Ingrese el numero " + (contador+1) + ": ", "00"));

	//valido que el ingreso sea numero
		while(isNaN(num))
			{
			alert("Verifique el numero ingresado");
			num= parseInt(prompt("Ingrese el numero " + (contador+1) + ": ", "00"));

			}
	// fin valido que el ingreso sea numero		

	//inicio validaciones
	resto=num%2;		

	if (num>0) 
		{
		sumPos=sumPos+num;
		qPos++;
		}
		else if(num<0)
		{
		sumNeg=sumNeg+num;
		qNeg++;

		}
		else
		{
		qCeros++;

		}

	if (resto==0) 
	{
	qPar++;

	}
	else
	{
	qImpar++;
	}






	//fin de validaciones

	//valido continuidad
	
	
	contador++;
	respuesta=prompt("Desea seguir ingresando numeros: ", "si o no");
	while(!(isNaN(respuesta)) || respuesta !="si" && respuesta !="no")
		{
		alert("Verifique la respuesta ingresada");
		respuesta=prompt("Desea seguir ingresando numeros: ", "si o no");;
		}
	//fin valido que el ingreso sea numero	
	}
	while(respuesta !="no" );

	promPos=sumPos/qPos;
	promNeg=sumNeg/qNeg;
	difPosNeg=qPos-qNeg;
	//valido neg	
	if (qNeg==0)
	{
		promNeg=0;
	}
document.write("Suma de los negativos " + sumNeg +"</br>");
document.write("Suma de los positivos " + sumPos+"</br>");
document.write("Cantidad de positivos " + qPos+"</br>");
document.write("Cantidad de negativos " + qNeg+"</br>");
document.write("Cantidad de ceros " + qCeros+"</br>");
document.write("Cantidad de números pares " + qPar+"</br>");
document.write("Promedio de positivos " + promPos.toFixed(2)+"</br>");
document.write("Promedios de negativos " + promNeg.toFixed(2)+"</br>");
document.write("Diferencia entre positivos y negativos " + difPosNeg +"</br>");
respuesta.to
}//FIN DE LA FUNCIÓN