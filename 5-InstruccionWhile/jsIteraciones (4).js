function mostrar()
{


var numero = parseInt(prompt("ingrese un número entre 0 y 9."));
while (numero<0 || numero >9 || isNaN(numero))
{
	alert("Verifique el numero ingresado");
	numero = parseInt(prompt("ingrese un número entre 0 y 9."));
}

document.getElementById("Numero").value= "El numero ingresado es: " + numero;
}//FIN DE LA FUNCIÓN