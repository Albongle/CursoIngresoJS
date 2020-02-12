function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo !="f" && sexo !="m")
{
	alert("Verifique el sexo ingresado");
	sexo = prompt("ingrese f ó m .");
}

if (sexo=="f")
{
    sexo="Femenino";
}
else
{
    sexo="Masculino";
}

document.getElementById("Sexo").value= "El sexo ingresado es: " + sexo;

}//FIN DE LA FUNCIÓN