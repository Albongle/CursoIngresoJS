function mostrar()
{

    var repetciones = parseInt(prompt("ingrese el número de repeticiones"));
    var qnumeros=0;
    while(isNaN(repetciones))
    {
        alert("Verifique el numero Ingresado");
        repetciones = parseInt(prompt("ingrese el número de repeticiones"));
    }
    
    for (cont=1;cont<=repetciones;cont++)
    {
    
    if ((repetciones%cont)==0)
        {
        
            document.write('Numero ' + cont + "</br>");
            qnumeros++;
    
        
        }
    }
    if (qnumeros>2)
    {
    document.write('No es primo ya que es divisible por ' + qnumeros + " numeros </br>");
    }
    else
    {
    document.write("El numero es primo </br>");
    }

}//FIN DE LA FUNCIÓN