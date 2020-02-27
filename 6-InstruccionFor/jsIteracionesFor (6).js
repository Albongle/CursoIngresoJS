function mostrar()
{
    document.write("<body bgcolor='red'><font color='white'><center>");
    var repetciones = parseInt(prompt("ingrese el número de repeticiones"));
    var qpares=0;
    while(isNaN(repetciones))
    {
        alert("Verifique el numero Ingresado");
        repetciones = parseInt(prompt("ingrese el número de repeticiones"));
    }
    
    for (cont=1;cont<=repetciones;cont++)
    {
    
    if ((cont%2)==0)
        {
        qpares++;
        document.write('Numero ' + cont + "</br>");
    
        
        }
    }
    document.write('Cantidad de numeros pares: ' + qpares + "</br>");
    

}//FIN DE LA FUNCIÓN