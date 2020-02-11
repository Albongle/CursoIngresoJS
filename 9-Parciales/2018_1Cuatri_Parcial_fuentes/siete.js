function mostrar()
{
    var nota = new Array();
    var n;
    var s;
    var sex= new Array();
    var x=1;
    var promtotal=0;
    var NotaBaja;
    var sexnotabaja;
    var cont=0;

    while (x<6)
    {

        while (n< 0 || n>= 11 || n=="")
        {

            n=parseInt(prompt("Ingrese la nota del Alumno " + x  + " :" , "0 a 10"));
            if (n< 0 || n>= 11) 
                {
                    alert("Verifique la nota ingresada");
                
                }


        }
         
        nota[x]=n;
        while ((s != "F" && s != "f") && (s != "M" && s != "m"))
        {

            s=prompt("Ingrese el sexo del Alumno " + x  + " :", "M o F");
            if ((s != "F" && s != "f") && (s != "M" && s != "m")) 
                {
                    alert("Verifique el sexo ingresado");
                
                }
        

        }
        if (n<nota[x-1])
        {
            NotaBaja=n;
            sexnotabaja=s;
        } 

        sex[x]=s;
        x++;
        
        

        
    }

    for (y=1; y<6; y++)
        {
            promtotal=nota[y]+promtotal;
            if (nota[y]>=6 && (sex[y]=="M" ||sex[y]=="m"))
            {
                cont=cont+1;
            }


        }

    promtotal=promtotal/5;
alert("El promedio de las notas totales es: " + promtotal );
alert("La nota mas baja fue: " + NotaBaja + " bajo el sexo " + sexnotabaja );
alert("La candtidad de varones con nota >6 son: " + cont );

}
