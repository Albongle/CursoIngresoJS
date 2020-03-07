function mostrar()
{
var incremento=1;
var ingLetra;
var ingNum;
var contpares=0;
var continpares=0;
var Qceros=0;
var Qpos=0;
var SumPos=0;
var SumNeg=0;
var prompos=0;
var n_max=0;
var n_min=0;
var l_max;
var l_min;


    do 
    {
    
     ingNum=parseInt(prompt("Ingrese un numero " + incremento  + " :" , "-100 a 100"));

        while (ingNum < -100 || ingNum >100 || isNaN(ingNum)) 
        {
            alert("Verifique el numero ingresado");
            ingNum=parseInt(prompt("Ingrese un numero " + incremento  + " :" , "-100 a 100"));
        
        }
     ingLetra=prompt("Ingrese la letra n° " + incremento  + " :" , "a - z"); 
        while (ingLetra.length >1 || !(ingLetra>='a' && ingLetra <='z' || ingLetra>='A' && ingLetra <='Z'))
        {
         alert("Verifique la letra ingresada");
         ingLetra=prompt("Ingrese la letra n° " + incremento  + " :" , "a - z"); 
     
        }
        //termino los ingresos

        /* aca empieza las validaciones */
        
        
        if (ingNum%2==0) { //valido pares e impares

            contpares++;
        }
        else
        {
            continpares++;
        } 
        
        if (ingNum>0) { //valido pos, neg y ceros
            SumPos=SumPos+ingNum;
            Qpos++;
            
        }
        else if (ingNum==0)
        {

            Qceros++;
        }
        else
        {
            SumNeg=SumNeg+ingNum;
        }
    

        if (incremento==1) { //valido max y min
         n_max=ingNum;
         n_min=ingNum;
         l_max=ingLetra;
         l_min=ingLetra;
        }
        else if (ingNum> n_max)
        {
            n_max=ingNum;
            l_max=ingLetra;
        }
        else if (ingNum<n_min) {
            n_min=ingNum;
            l_min=ingLetra;
            
        }





        /* aca termina las validaciones */



        //valido continuidad
        question=prompt("¿Desea informar?: " , "s o n");
        while (question !="s" && question!="n" ) 
        {
            alert("Verifique la letra ingresada");
            question=prompt("¿Desea informar?: " , "s o n");
        
        }

        incremento++;


    }
    while (question!= "s");



if (Qpos>0)
{
prompos=SumPos/Qpos;
}

//a
document.write("La cantidad de números pares es: " + contpares + "</br>");
//b
document.write("La cantidad de números impares es: " + continpares + "</br>");
//c
document.write("La cantidad de ceros es: " + Qceros + "</br>");
//d
document.write("El promedio de todos los numeros POS ingresados es: " + prompos + "</br>");
//e
document.write("La suma total de los negativos es: " + SumNeg + "</br>");
//f
document.write("El numero Max es: " + n_max + " Su letra es " + l_max + "</br>");
document.write("El numero Min es: " + n_min + " Su letra es " + l_min + "</br>");


}
