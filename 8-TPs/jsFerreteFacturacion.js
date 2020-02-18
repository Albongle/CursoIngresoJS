/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var preciouno= parseInt(document.getElementById("PrecioUno").value);
    var preciodos= parseInt(document.getElementById("PrecioDos").value);
    var preciotres= parseInt(document.getElementById("PrecioTres").value);
    var resultado;
    resultado=preciouno+preciodos+preciotres;
    alert("El resultado de la suma es: " + resultado);
}
function Promedio () 
{
    var preciouno= parseInt(document.getElementById("PrecioUno").value);
    var preciodos= parseInt(document.getElementById("PrecioDos").value);
    var preciotres= parseInt(document.getElementById("PrecioTres").value);
    var suma;
    var promedio;
    suma=preciouno+preciodos+preciotres;
    promedio=suma/3;
    alert("El resultado del promedio es: " + promedio);
}
	

function PrecioFinal () 
{
    var preciouno= parseInt(document.getElementById("PrecioUno").value);
    var preciodos= parseInt(document.getElementById("PrecioDos").value);
    var preciotres= parseInt(document.getElementById("PrecioTres").value);
    var precio;
    var iva;
    precio=preciouno+preciodos+preciotres;
    iva=precio*21/100;
    precio=precio+iva;
    alert("El precio final (más IVA 21%) es: " + precio.toFixed(2));
}