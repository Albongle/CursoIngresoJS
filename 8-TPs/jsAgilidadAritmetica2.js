/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
function comenzar()
{
    setTimeout(Responder,4000)
    var inicio=1;
    var fin =10;
    var inicio2=1;
    var fin2=4;
    var num1;
    var num2;
    var operacion;

    num1=Math.floor(Math.random()*((fin+1)-inicio)+inicio);
    num2=Math.floor(Math.random()*((fin+1)-inicio)+inicio);
    document.getElementById("PrimerNumero").value=num1;
    document.getElementById("SegundoNumero").value=num2;
    operacion=Math.floor(Math.random()*((fin2+1)-inicio2)+inicio2);
    switch(operacion)
    {
        case 1:
            {
                document.getElementById("Operador").value="+";
                respuesta=num1+num2;
                break;
            }

        case 2:
            {
                document.getElementById("Operador").value="-";
                respuesta=num1-num2;
                break;
            }
        case 3:
            {
                document.getElementById("Operador").value="*";
                respuesta=num1*num2;
                break;
            }
        case 4:
            {
                document.getElementById("Operador").value="/";
                respuesta=num1/num2;
                break;
            }


    }

	
}//FIN DE LA FUNCIÓN
function Responder()
{
    var ingreso=parseInt(document.getElementById("Respuesta").value);
    if (ingreso==respuesta)
    {
        alert("El resultado es correcto");

    }
    else{
    alert("El resultado  no es correcto");
    }


}//FIN DE LA FUNCIÓN
