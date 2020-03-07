function mostrar()
{
var contador;
var altura;
var sexo;
var totalaltura=0;
var flag=0;
var alturaBaja;
var sex_alturabaja;
var qmujeres=0;
var promalturas;
for (contador=1; contador<6; contador++)
{

    //ingreso y valido altura    
    altura=parseInt(prompt("Ingrese la altura del jugador numero " + contador + ": " , "(0 a 250)"));
    while(altura<0 || altura>250 || isNaN(altura))
    {
        alert("Verifique la altura ingresada");
        altura=parseInt(prompt("Ingrese la altura del jugador numero " + contador + ": ", "(0 a 250)"));
    }
    //ingreso y valido sexo
    sexo=prompt("Ingrese el sexo del jugador numero " + contador + ": ", "(f o m)");
    while(sexo!='f' && sexo!='m')
    {
        alert("Verifique el sexo ingresado");
        sexo=prompt("Ingrese el sexo del jugador numero " + contador + ": ", "(f o m)");
    }


    //sumo las alturas
    totalaltura=altura+totalaltura;

    //verifico altura mas baja
    if (flag==0 || altura<alturaBaja)
    {
    alturaBaja=altura;
    sex_alturabaja=sexo;
    flag=1;
    }
    //verifico mujeres mas 190
    if (altura>190 && sexo=='f') 
    {
    qmujeres++
    }






}
alert(contador-1);
promalturas=totalaltura/(contador-1);

alert("El promedio de las alturas totales es: " + promalturas.toFixed(2) + "\nLa altura más baja es " + alturaBaja + " y el sexo de esa persona es: " + sex_alturabaja + "\nLa cantidad de muheres que su altura supere los 190 centimetros es: " + qmujeres);

}
