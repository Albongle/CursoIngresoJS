/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var importe;
    var resultado;
	importe=parseFloat(document.getElementById("sueldo").value);
    resultado=(importe*10/100)+importe;
    document.getElementById("resultado").value=resultado;

}
