function mostrar()
{

    var repetciones = parseInt(prompt("ingrese el número de repeticiones"));
    while(isNaN(repetciones))
    {
        alert("Verifique el numero Ingresado");
        repetciones = parseInt(prompt("ingrese el número de repeticiones"));
    }
    
    for (cont=0;cont<repetciones;cont++)
    {
    
    if ((cont%2)==0)
        {
        document.write('Numero ' + cont + "</br>");
    
        
        }
    }

}//FIN DE LA FUNCIÓN