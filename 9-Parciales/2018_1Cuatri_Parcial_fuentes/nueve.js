function mostrar()
{
var produc;
var marcapesado;
var Qprodbajocero=0;
var sumpeso=0;
var prompeso;
var pesoMax=0;
var pesoMin;
var Qtemppares=0;
var peso;
var temp;
var incremento=0;
var valida;

do 
{
    incremento++;
    produc=prompt("Ingrese el producto " + incremento);
    peso=parseInt(prompt("Ingrese el peso del producto " + incremento  + " :" , "1-100"));
    while (peso < 1 || peso >100 || isNaN(peso))
    {
        peso=parseInt(prompt("Ingrese el peso del producto " + incremento  + " :" , "1-100"));

    } 
    temp=parseInt(prompt("Ingrese la temp del producto " + incremento  + " :" , "-30 a 30"));
    while (temp < -30 || temp > 30 || isNaN(temp))
    {
        temp=parseInt(prompt("Ingrese la temp del producto " + incremento  + " :" , "-30 a 30"));


    }

if (temp%2==0)
    {
    Qtemppares++;

    }


if (temp < 0)
    {
    Qprodbajocero++;
    }

sumpeso=peso+sumpeso;

if (incremento==1)
{ 
    pesoMax=peso;
    pesoMin=peso;
    marcapesado=produc;
}   
else if (peso>pesoMax)
{
    pesoMax=peso;
    marcapesado=produc;

}
else if (peso < pesoMin)
{
    pesoMin=peso;

}


 valida=prompt('Para informar, ingrese "Informar"', 'Informar');
}
while (valida != "Informar");
prompeso=sumpeso/incremento;
document.write("La cantidad de temperaturas pares es: " + Qtemppares);
document.write(" La marca del producto mas pesado es: " + marcapesado);
document.write(" La cantidad de productos que se conservan a menos de 0 grados es: " + Qprodbajocero);
document.write(" El promedio del peso de todos los productos: " + prompeso);
document.write(" El peso Max es: " + pesoMax + " y el minimo " + pesoMin);


}
