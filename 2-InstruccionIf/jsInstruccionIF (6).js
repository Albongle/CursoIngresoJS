function mostrar()
{
//tomo la edad
var edad;
edad=parseInt(document.getElementById("edad").value);
if (edad>18)
            {

              alert("La persona es mayor de edad");

            }
            else if (edad >=13 && edad<=17)
            {
              alert("La persona es adolescente")
            }
            else if (edad<13)
            {
              alert("La persona es un niño")
            }



}//FIN DE LA FUNCIÓN
