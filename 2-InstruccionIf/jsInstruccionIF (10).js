function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
  var nota;
  var maximo=10;
  var minimo=1;

nota=Math.floor(Math.random() * ((maximo+1)-minimo)+ minimo);

if (nota>=9 && nota <=10)
            {

              alert("EXCELENTE " + nota);

            }
            else if (nota>=4)
            {
              alert("APROBÓ " + nota);

            }
            else
            {

              alert("Vamos, la proxima se puede " + nota);
            }


}//FIN DE LA FUNCIÓN
