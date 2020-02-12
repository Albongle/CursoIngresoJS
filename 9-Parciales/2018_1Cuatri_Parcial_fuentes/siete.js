function mostrar()
{
    var nota_a = new Array();
    var nota;
    var sexo;
    var sexo_a= new Array();
    var x_incremento=1;
    var promtotal=0;
    var NotaBaja;
    var sexnotabaja;
    var cont=0;

    for (x_incremento=1; x_incremento<6;x_incremento++)
    {
        nota=parseInt(prompt("Ingrese la nota del Alumno " + x_incremento  + " :" , "0 a 10"));
        while (nota< 0 || nota > 10)
        {
            alert("Verifique la nota ingresada");
                
            nota=parseInt(prompt("Ingrese la nota del Alumno " + x_incremento  + " :" , "0 a 10"));
            
        }
         
        nota_a[x_incremento]=n;

        sexo=prompt("Ingrese el sexo del Alumno " + x_incremento  + " :", "M o F");
        while ((sexo != "F" && sexo != "f") && (sexo != "M" && sexo != "m"))
        {
            alert("Verifique el sexo ingresado");
            sexo=prompt("Ingrese el sexo del Alumno " + x_incremento  + " :", "M o F");

        }
        sexo_a[x_incremento]=sexo;
        
        if (nota<nota_a[x_incremento-1])
        {
            NotaBaja=nota;
            sexnotabaja=sexo;
        } 

       
        
               
    }

    for (y=1; y<6; y++)
        {
            promtotal=nota[y]+promtotal;
            if (nota_a[y]>=6 && (sexo_a[y]=="M" ||sexo_a[y]=="m"))
            {
                cont=cont+1;
            }


        }

    promtotal=promtotal/5;
alert("El promedio de las notas totales es: " + promtotal );
alert("La nota mas baja fue: " + NotaBaja + " bajo el sexo " + sexnotabaja );
alert("La candtidad de varones con nota >6 son: " + cont );

}
