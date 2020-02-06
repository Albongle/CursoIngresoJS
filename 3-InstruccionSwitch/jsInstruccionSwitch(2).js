function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;
var invierno;
var antesinv;
var despinv;
invierno=(mesDelAño=="Julio") || (mesDelAño=="Agosto");
antesinv=(mesDelAño=="Enero") || (mesDelAño=="Febrero")|| (mesDelAño=="Marzo")|| (mesDelAño=="Abril")|| (mesDelAño=="Mayo")
|| (mesDelAño=="Junio");
despinv=(mesDelAño=="Septiembre") || (mesDelAño=="Octubre")|| (mesDelAño=="Noviembre")|| (mesDelAño=="Diciembre");

switch (true)
{
   case invierno :
   
  {
    alert("Abrigate que hace frio.");
    break;
  }

  case antesinv :
  {
    alert("Falta para el invierno");
    break;
  }

  case despinv :
  {
    alert("Ya pasamos el frio, ahora calor!!!.");
    break;
  }





}




}//FIN DE LA FUNCIÓN
