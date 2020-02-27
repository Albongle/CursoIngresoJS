function mostrar()
{
    var nota;
    var sexo;
    var x_incremento=1;
    var promtotal=0;
    var NotaBaja;
    var acumnota=0;
    var sexnotabaja;
    var contvarones=0;

    for (x_incremento=1; x_incremento<6;x_incremento++)
    {
        nota=parseInt(prompt("Ingrese la nota del Alumno " + x_incremento  + " :" , "0 a 10"));
        while (nota< 0 || nota > 10 || isNaN(nota))
        {
            alert("Verifique la nota ingresada");
                
            nota=parseInt(prompt("Ingrese la nota del Alumno " + x_incremento  + " :" , "0 a 10"));
            
        }
         

        sexo=prompt("Ingrese el sexo del Alumno " + x_incremento  + " :", "M o F");
        while ((sexo != "F" && sexo != "f") && (sexo != "M" && sexo != "m"))
        {
            alert("Verifique el sexo ingresado");
            sexo=prompt("Ingrese el sexo del Alumno " + x_incremento  + " :", "M o F");

        }

        if (x_incremento==1)
        {
            NotaBaja=nota;
            sexnotabaja=sexo;
        }
        else if (nota<NotaBaja)
        {
            NotaBaja=nota;
            sexnotabaja=sexo;
        }

        if (nota>=6 && sexo=="M" || nota>=6 && sexo=="m" )
        {
            contvarones++;
        }

        
      acumnota=acumnota+nota;  
        

       
        
               
    }

   
promtotal=acumnota/5;
alert("El promedio de las notas totales es: " + promtotal  );
alert("La nota mas baja fue: " + NotaBaja + " bajo el sexo " + sexnotabaja );
alert("La candtidad de varones con nota >6 son: " + contvarones );

}
