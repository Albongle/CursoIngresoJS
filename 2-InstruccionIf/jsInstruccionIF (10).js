function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var rm;
rm=Math.random()*10;
rm=Math.round(rm);
if (rm>=9 && rm <=10)
            {

              alert("EXCELENTE " + rm);

            }
            else if (rm>=4 && rm <9)
            {
              alert("APROBÓ " + rm);

            }
            else if (rm<4)
            {

              alert("Vamos, la proxima se puede " + rm);
            }


}//FIN DE LA FUNCIÓN
