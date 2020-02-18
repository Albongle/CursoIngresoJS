/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
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
