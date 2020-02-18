function mostrar()
{

	var contador=0;
	var acumulador=0;
	var num;

	while(contador<5)
	{

	num= parseInt(prompt("Ingrese el numero " + (contador+1) + ": ", "00"));
	while(isNaN(num))
		{
		alert("Verifique el numero ingresado");
		num= parseInt(prompt("Ingrese el numero " + (contador+1) + ": ", "00"));

		}
	acumulador=+acumulador+num;	
	contador++;
	}
	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN