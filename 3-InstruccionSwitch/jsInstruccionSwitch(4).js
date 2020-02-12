function mostrar()
{
var mesDelAnio = document.getElementById("mes").value;


switch (mesDelAnio)
{
case "Febrero" :
   
  {
    alert("Si tiene 29 dias");
    break;
  }
  case "Abril" :
  case "Junio" :
  case "Septiembre" :
  case "Noviembre" :
  {
    alert("Si tiene 30 dias");
    break;
  }

  default:

  {
    alert("Si tiene 31 dias");
    break;
  }

  





}
}
//FIN DE LA FUNCIÓN