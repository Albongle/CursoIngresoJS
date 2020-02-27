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
    document.write('Cantidad de numeros divisibles: ' + qnumeros + "</br>");

}//FIN DE LA FUNCIÓN