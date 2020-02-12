function mostrar()
{
var produc;
var produc_pesado;
var marcapesado;
var Qprodbajocero;
var sumpeso;
var prompeso;
var pesoMax
var pesoMin;
var Qtemppares;
var peso;
var temp;
var temp_pares;
var incremento=1;
produc=prompt("Ingrese el producto " + incremento  + " para informar ingrese: " , "Informar");
while (produc != "Informar")
{
    
    peso=parseInt(prompt("Ingrese el peso del producto " + incremento  + " :" , "1-100"));
    while (peso < 1 || peso >100)
    {
        peso=parseInt(prompt("Ingrese el peso del producto " + incremento  + " :" , "1-100"));

    } 
    temp=parseInt(prompt("Ingrese la temp del producto " + incremento  + " :" , "-30 a 30"));
    while (temp < -30 || temp > 30)
    {
        temp=parseInt(prompt("Ingrese la temp del producto " + incremento  + " :" , "-30 a 30"));


    }
temp_pares=temp%2;
if (temp_pares<1)
    {
    Qtemppares++;

    }
if(produc_pesado<peso)
    {   
    produc_pesado=peso;
    marcapesado=produc;
    }

if (temp < 0)
    {
    Qprodbajocero++;
    }
sumpeso=peso+sumpeso;

if (peso>pesoMax)
{
    pesoMax=peso;

}
if (peso>pesoMin)
{
    pesoMin=peso;

}

    incremento++;
    produc=prompt("Ingrese el producto " + incremento  + " para informar ingrese: " , "Informar")
}
prompeso=sumpeso/incremento;
document.write("La cantidad de temperaturas pares es: " + Qtemppares);
document.write(" La marca del producto mas pesado es: " + marcapesado);
document.write(" La cantidad de productos que se conservan a menos de 0 grados es: " + Qprodbajocero);
document.write(" El promedio del peso de todos los productos: " + prompeso);
document.write(" El peso Max es: " + pesoMax + " y el minimo " + pesoMin);


}
