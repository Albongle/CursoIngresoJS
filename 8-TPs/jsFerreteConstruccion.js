/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular
 y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo= parseInt(document.getElementById("Largo").value);
    var ancho= parseInt(document.getElementById("Ancho").value);
    var resultado;
    resultado=(largo*ancho)*3;
    alert("Debe comprar " + resultado + " metros de alambre");




}
function Circulo () 
{
	
    
    var radio= parseInt(document.getElementById("Radio").value);
    var resultado;
    resultado=Math.PI  * Math.pow(radio,2) *3;
    alert("Debe comprar " + resultado.toFixed(2) + " metros de alambre");
}
function Materiales () 
{
	var largo= parseInt(document.getElementById("Largo").value);
    var ancho= parseInt(document.getElementById("Ancho").value);
    var cemento;
    var cal;
    cemento=largo*ancho*2;
    cal=largo*ancho*3;
    
    alert("Debe comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}