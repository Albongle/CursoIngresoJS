function mostrar()
{
var x=1;
var ingLetra;
var ingNum;
var num1= new Array();
var letra1 =new Array();
var pares=0;
var contpares=0;
var continpares=0;
var Qceros=0;
var Qpos=0;
var Qneg=0;
var SumPos=0;
var SumNeg=0;
var prompos;
var n_max=0;
var n_min=0;
var l_max;
var l_min;
var prom=0;


while (ingLetra != "Informar" && ingLetra != "informar")
{
    
    ingLetra=prompt("Ingrese la letra numero " + x  + " para informar ingrese: " , "Informar");




    if (ingLetra != "Informar" && ingLetra != "informar")
    {

    letra1[x]=ingLetra;

    ingNum=parseInt(prompt("Ingrese un numero " + x  + " :" , "-100 a 100"));

    while (ingNum < -100 || ingNum >100) 
        {
            alert("Verifique el numero ingresado");
            ingNum=parseInt(prompt("Ingrese un numero " + x  + " :" , "-100 a 100"));
        
        }

        num1[x]=ingNum;
        
        x++;  
    }


}


for (y=1; y<x; y++)
{
    //numeros pares
pares=num1[y] % 2;
    if (pares<1)
    {
        contpares++;
    }
    else
    {
        continpares++;
    }
//sumo positivos y tot
    if (num1[y]>0)
        {
       SumPos=num1[y]+SumPos;
       Qpos++;
       
        }
//sumo negativos y tot
    else if (num1[y]<0)
        {

            SumNeg=num1[y]+SumNeg;
            Qneg++;
            
        } 
// cuento ceros y y tot
    else
        {
            Qceros++; 
            
        }
// maximos y minimos
    if (num1[y] >= n_max)
        {
            n_max=num1[y];
            l_max=letra1[y];
        }
    else if (num1[y] <= n_min)
        {
            n_min=num1[y];
            l_min=letra1[y];
        }
        


}


prompos=SumPos/Qpos;
//a
document.write("La cantidad de números pares es: " + contpares);
//b
document.write(" La cantidad de números impares es: " + continpares);
//c
document.write(" La cantidad de ceros es: " + Qceros);
//d
document.write(" El promedio de todos los numeros POS ingresados es: " + prompos);
//e
document.write(" La suma total de los negativos es: " + SumNeg);
//f
document.write(" El numero Max es: " + n_max + " Su letra es " + l_max);
document.write(" El numero Min es: " + n_min + " Su letra es " + l_min);


}
